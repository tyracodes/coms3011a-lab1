import { describe, expect, it } from "vitest";
import { isTaskOverdue } from "../lib/taskUtils";

describe("Overdue Rule", () => {

  it("returns true for an incomplete task with a past due date", () => {

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    expect(
      isTaskOverdue(yesterday, "Todo")
    ).toBe(true);

  });

  it("returns false for a completed task", () => {

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    expect(
      isTaskOverdue(yesterday, "Complete")
    ).toBe(false);

  });

});