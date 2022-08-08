import BookBrowserNavigation from "../../../src/components/BookBrowser/BookBrowserNavigation";
import { mount } from "@vue/test-utils";

describe("Book Browser Navigation", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(BookBrowserNavigation, {
            props: {
                maxPages: 3,
                currPage: 3,
            }
        });
    })

    it("Should match the snapshot", () => {
        expect(wrapper.element).toMatchSnapshot();
    })

    it('Should not allow forward movement', () => {
        expect(wrapper.vm.isForwardPossible).toStrictEqual({"color": "lightgrey", "cursor": "unset"});
    });

    it('Should allow back movement', () => {
        //in this case false means that item is not disabled
        expect(wrapper.vm.isBackPossible).toBe(false);
    });

    it('Should display page 3 of 3', () => {
        expect(wrapper.html()).toContain("Page 3 of 3");
    });
    
});