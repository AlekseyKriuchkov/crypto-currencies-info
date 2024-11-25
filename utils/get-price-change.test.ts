import {getPriceChange} from "@/utils/get-price-change";
import {expect, test} from "@jest/globals";

test("Validate value", () => {
    expect(getPriceChange(1000, 10)).toBe(900)
    expect(getPriceChange(1000, 10)).toBe("N/D")
    expect(getPriceChange(1000, 10)).toBe("N/D")
    expect(getPriceChange(1000, 10)).toBe("N/D")
    expect(getPriceChange(1000, 10)).toBe("N/D")

})