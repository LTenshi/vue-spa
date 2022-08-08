import BookBrowser from "../../../src/components/BookBrowser/BookBrowser";
import BookBrowserRow from "../../../src/components/BookBrowser/BookBrowserRow";
import BookBrowserNavigation from "../../../src/components/BookBrowser/BookBrowserNavigation";
import { mount } from "@vue/test-utils";

describe("Book Browser", () => {
    let wrapper;
    let BookBrowserRowComponent;
    let BookBrowserNavigationComponent;

    beforeEach(() => {
        wrapper = mount(BookBrowser, {
            props: {
                books: [
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
                    {
                        "id": "1",
                        "coverUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads7.wikiart.org%2Fimages%2Fhonore-daumier%2Fdon-quixote-and-sancho-panza-going-to-the-wedding-gamaches.jpg&f=1&nofb=1",
                        "name": "Don Quixote",
                        "author": "Miguel de Cervantes",
                        "year": "1605",
                        "rating": "9.7",
                        "links": [
                        { "name": "Amazon", "url": "https://www.amazon.co.uk" }
                        ],
                        "details": "**Don Quixote** is a Spanish epic novel by Miguel de Cervantes. Originally published in two parts, in 1605 and 1615, its full title is The Ingenious Gentleman Don Quixote of La Mancha or, in Spanish, El ingenioso hidalgo don Quijote de la Mancha."
                    }
                ],
                maxPages: 1,
                currPage: 1
            }
        });
        BookBrowserRowComponent = wrapper.findAllComponents(BookBrowserRow);
        BookBrowserNavigationComponent = wrapper.findComponent(BookBrowserNavigation);
    })

    it("Should match the snapshot", () => {
        expect(wrapper.element).toMatchSnapshot();
    })

    it('Should render the book browser rows', () => {
        expect(BookBrowserRowComponent.length).toBe(2);
    });

    it('Should render the book browser rows', () => {
        expect(BookBrowserNavigationComponent.exists()).toBe(true);
    });

    it('Should have no ability to navigate', () => {
        expect(BookBrowserNavigationComponent.vm.isBackPossible).toStrictEqual({"color": "lightgrey", "cursor": "unset"});
        expect(BookBrowserNavigationComponent.vm.isForwardPossible).toStrictEqual({"color": "lightgrey", "cursor": "unset"});
    });

    it('Should contain capitalised headers', () => {
        expect(wrapper.html()).toContain("TITLE");
        expect(wrapper.html()).toContain("PUBLISHED");
        expect(wrapper.html()).toContain("RATING");
        expect(wrapper.html()).toContain("BUY ON");
    });

});