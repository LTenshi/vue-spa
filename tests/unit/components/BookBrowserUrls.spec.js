import BookBrowserUrls from "../../../src/components/BookBrowser/BookBrowserUrls";
import { mount } from "@vue/test-utils";

describe("Book Browser Urls", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(BookBrowserUrls, {
            props: {
               bookLinks: [
                { name: "testing", url: "www.testing.com" },
                { name: "testing 2", url: "www.testing2.com" },
               ]
            }
        });
    })

    it("Should match the snapshot", () => {
        expect(wrapper.element).toMatchSnapshot();
    })

    it('Should contain 2 urls', () => {
        expect(wrapper.html()).toContain("<a href=\"www.testing.com\" class=\"bookLink\">testing<br></a>");
        expect(wrapper.html()).toContain("<a href=\"www.testing2.com\" class=\"bookLink\">testing 2<br></a>");
    });
    
});