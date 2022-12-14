/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil-community/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface DisplayGoals {
        "goals": Array<any>;
    }
    interface GoalForm {
        "_id": string;
        "action": string;
        "completed": boolean;
        "goal": string;
        "handleCreate": Function;
        "handleUpdate": Function;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLDisplayGoalsElement extends Components.DisplayGoals, HTMLStencilElement {
    }
    var HTMLDisplayGoalsElement: {
        prototype: HTMLDisplayGoalsElement;
        new (): HTMLDisplayGoalsElement;
    };
    interface HTMLGoalFormElement extends Components.GoalForm, HTMLStencilElement {
    }
    var HTMLGoalFormElement: {
        prototype: HTMLGoalFormElement;
        new (): HTMLGoalFormElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "display-goals": HTMLDisplayGoalsElement;
        "goal-form": HTMLGoalFormElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface DisplayGoals {
        "goals"?: Array<any>;
    }
    interface GoalForm {
        "_id"?: string;
        "action"?: string;
        "completed"?: boolean;
        "goal"?: string;
        "handleCreate"?: Function;
        "handleUpdate"?: Function;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "display-goals": DisplayGoals;
        "goal-form": GoalForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "display-goals": LocalJSX.DisplayGoals & JSXBase.HTMLAttributes<HTMLDisplayGoalsElement>;
            "goal-form": LocalJSX.GoalForm & JSXBase.HTMLAttributes<HTMLGoalFormElement>;
        }
    }
}