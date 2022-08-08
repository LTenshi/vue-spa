import BookBrowserRow from "../../../src/components/BookBrowser/BookBrowserRow";
import BookBrowserCover from "../../../src/components/BookBrowser/BookBrowserCover";
import BookBrowserUrls from "../../../src/components/BookBrowser/BookBrowserUrls";

import { mount } from "@vue/test-utils";

describe("Book Browser Cover", () => {
    let wrapper;
    let coverElement;
    let urlElement;

    beforeEach(() => {
        wrapper = mount(BookBrowserRow, {
            props: {
               book:  
                {
                    "id": "0",
                    "coverUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.penguin.com.au%2Fcovers%2Foriginal%2F9780141956794.jpg&f=1&nofb=1",
                    "name": "In Search of Lost Time",
                    "author": "Marcel Proust",
                    "year": "1913",
                    "rating": "9.8",
                    "links": [
                    { "name": "Amazon", "url": "https://www.amazon.co.uk" },
                    { "name": "iBooks", "url": "https://www.apple.com/uk/apple-books/" },
                    { "name": "Play Store", "url": "https://play.google.com/store/books" }
                    ],
                    "details": "**In Search of Lost Time** (French: À la recherche du temps perdu), first translated into English as Remembrance of Things Past, and sometimes referred to in French as La Recherche (The Search), is a novel in seven volumes by French author Marcel Proust.This early 20th-century work is his most prominent, known both for its length and its theme of involuntary memory."
                },
            }
        });
        coverElement = wrapper.findComponent(BookBrowserCover);
        urlElement = wrapper.findComponent(BookBrowserUrls);
    })

    it("Should match the snapshot", async () => {
        expect(wrapper.element).toMatchSnapshot();

        await coverElement.vm.openDetails();

        expect(wrapper.element).toMatchSnapshot("BookBrowserRowExpanded");
    })
    
    it('Should contain a cover element', () => {
        expect(coverElement.exists()).toBe(true);
    });
    
    it('Should contain a url element', () => {
        expect(urlElement.exists()).toBe(true);
    });

    it('Should contain a book year', () => {
        expect(wrapper.html()).toContain("1913");
    });

    it('Should contain a score', () => {
        expect(wrapper.html()).toContain("9.8/10");
    });

    it('Should not display details', () => {
        expect(wrapper.html()).not.toContain("**In Search of Lost Time**");
    });

    it('Should display details when image is clicked', async () => {
        await coverElement.vm.openDetails();

        expect(wrapper.html()).toContain("<strong>In Search of Lost Time</strong>");
    });
    
});