import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { Mouse } from "./Mouse";

export function MouseTracker() {
  return (
    <div>
      Mouse Tracker
      <div>
        <Mouse
          renderProps={(value) => (
            <div>
              <Cat mousePosition={value} />
              <Dog mousePosition={value} />
            </div>
          )}
        />
      </div>
    </div>
  );
}
