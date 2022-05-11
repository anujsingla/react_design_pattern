import { ChildComponent } from "./ChildComponent";
import { SharedState1 } from "./SharedState1";
import { SharedState2 } from "./SharedState2";

export function ParentComponent() {
  return (
    <div>
      Parent Component
      <div>
        <ChildComponent
          renderProps={(value) => (
            <div>
              <SharedState1 value={value} />
              <SharedState2 value={value} />
            </div>
          )}
        />
      </div>
    </div>
  );
}
