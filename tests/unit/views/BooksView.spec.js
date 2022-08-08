import BooksView from "../../../src/views/BooksView";
import BookBrowser from "../../../src/components/BookBrowser/BookBrowser";
import BookBrowserNavigation from "../../../src/components/BookBrowser/BookBrowserNavigation";
import books from "../../../public/books"
import { mount } from "@vue/test-utils";
import { jest } from '@jest/globals';



describe("Books View", () => {
    let wrapper;
    let BookBrowserComponent;
    let BookBrowserNavigationComponent;

    beforeEach(() => {
        //Fetch is not a node function yet. Need to mock it out.
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(books),
            })
        );
        wrapper = mount(BooksView);
        BookBrowserComponent = wrapper.findComponent(BookBrowser);
        BookBrowserNavigationComponent = BookBrowserComponent.findComponent(BookBrowserNavigation);

    })

    afterEach(() => {
        global.fetch.mockRestore();
    })

    it("Should match the snapshot", async () => {
        expect(wrapper.element).toMatchSnapshot();

        await BookBrowserNavigationComponent.vm.moveForward();
        await BookBrowserNavigationComponent.vm.moveForward();

        expect(wrapper.element).toMatchSnapshot("2 moved forward");
    })

    it('Should contain an array of books', () => {
        expect(wrapper.vm.books.length).toBeGreaterThan(0);
    });

    it('Should contain an array of 5 books', () => {
        expect(wrapper.vm.books.length).toBe(5);
    });

    it('Should call fetch', () => {
        expect(global.fetch.mock.calls.length).toBe(1);
    });

    it('Should have 3 pages', () => {
        expect(wrapper.vm.pages).toBe(3);
    });

    it('Should render the book browser', () => {
        expect(BookBrowserComponent.exists()).toBe(true);
    });

    it('Book browser should have books, pages and a current page', () => {
        expect(BookBrowserComponent.vm.books.length).toBe(5);
        expect(BookBrowserComponent.vm.maxPages).toBe(3);
        expect(BookBrowserComponent.vm.currPage).toBe(1);
    });

    it('Should show 2 books after navigating twice', async () => {
        await BookBrowserNavigationComponent.vm.moveForward();
        await BookBrowserNavigationComponent.vm.moveForward();

        expect(BookBrowserComponent.vm.currPage).toBe(3);
        expect(BookBrowserComponent.vm.books.length).toBe(2);
        expect(BookBrowserComponent.vm.maxPages).toBe(3);
    });
    
});