import BookBrowserCover from "../../../src/components/BookBrowser/BookBrowserCover";
import { mount } from "@vue/test-utils";

describe("Book Browser Cover", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(BookBrowserCover, {
            props: {
               bookName: "Future",
               bookAuthor: "Dimitry Glukhovsky",
               bookCover: "imagineaurlhere"
            }
        });
    })

    it("Should match the snapshot", () => {
        expect(wrapper.element).toMatchSnapshot();
    })
    
    it('Should display the name', () => {
        expect(wrapper.html()).toContain("Future");
    });

    it('Should display the author', () => {
        expect(wrapper.html()).toContain("Dimitry Glukhovsky");
    });

    it('Should display the image', () => {
        expect(wrapper.html()).toContain("imagineaurlhere");
    });
    
});