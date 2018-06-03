import * as sinon from "sinon";
import * as React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import { TrailListProps, TrailListView, TrailStatus } from "./TrailList";
import { resetWiring } from "../../testing/testingHelper";
import IconOpen from "../icons/IconOpen";
import IconUnknown from "../icons/IconUnknown";
import IconWarning from "../icons/IconWarning";
import IconClosed from "../icons/IconClosed";

describe("TrailList", () => {
    describe("TrailListView", () => {
        const getTestObject = (props: TrailListProps) => {
            const defaultTrails = [{
                area: "1",
                name: "first trail",
                status: 1,
                url: "url goes here",
            }];

            const testObjectProps = { trails: !!props ? props.trails : defaultTrails };

            return shallow(<TrailListView {...testObjectProps} />);
        };

        test("renders trails by area", () => {
            const trails = [{
                area: "local",
                name: "gravelRide",
                status: 1,
                url: "url goes here",
            }, {
                area: "mountains",
                name: "downhill",
                status: 0,
                url: "other url goes here",
            }, {
                area: "local",
                name: "slowRide",
                status: 0,
                url: "url",
            }];
            const testObject = getTestObject({trails});

            const firstArea = testObject.find("#local");
            const secondArea = testObject.find("#mountains");

            expect(firstArea.find("#area_local").text()).toBe("local");
            expect(secondArea.find("#area_mountains").text()).toBe("mountains");

            expect(firstArea.find("#gravelRide").length).toEqual(1);
            expect(firstArea.find("#slowRide").length).toEqual(1);
            expect(firstArea.find("#downhill").length).toEqual(0);
            expect(secondArea.find("#downhill").length).toEqual(1);
            expect(secondArea.find("#gravelRide").length).toEqual(0);
            expect(secondArea.find("#slowRide").length).toEqual(0);
        });

        test("renders trail information", () => {
            const trails = [{
                area: "local",
                name: "bluffView",
                status: 1,
                url: "url goes here",
            }];
            const testObject = getTestObject({trails});

            const trail = testObject.find("#bluffView");

            expect(trail.find("#trailName").text()).toBe("bluffView");
            expect(trail.find(TrailStatus).props().status).toBe(1);
            expect(trail.find("a").props().href).toBe(`https://gorctrails.org${trails[0].url}`);
        });
    });

    describe("TrailStatus", () => {
        test("returns IconOpen when status is zero", () => {
            const testObject = shallow(<TrailStatus status={0}/>);

            expect(testObject.type()).toEqual(IconOpen);
        });
        test("returns IconWarning when status is one", () => {
            const testObject = shallow(<TrailStatus status={1}/>);

            expect(testObject.type()).toEqual(IconWarning);
        });
        test("returns IconClosed when status is two", () => {
            const testObject = shallow(<TrailStatus status={2}/>);

            expect(testObject.type()).toEqual(IconClosed);
        });
        [-1, 3, 4, 15].forEach((status) => test(`returns IconUnknown when status is not in known list status: ${status}`, () => {
            const testObject = shallow(<TrailStatus status={status}/>);

            expect(testObject.type()).toEqual(IconUnknown);
        }));
    });
});