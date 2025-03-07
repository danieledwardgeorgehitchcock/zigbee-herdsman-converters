import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["Z601", "Z602", "Z603", "Z604"],
        model: "Z6",
        vendor: "Atsmart",
        description: "3 gang smart wall switch (no neutral wire)",
        extend: [m.deviceEndpoints({endpoints: {left: 1, center: 2, right: 3}}), m.onOff({endpointNames: ["left", "center", "right"]})],
    },
];
