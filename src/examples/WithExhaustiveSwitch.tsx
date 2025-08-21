import { exhaustiveSwitch } from '../lib/exhaustiveSwitch';
import type { Interaction } from '../lib/types';

// This uses the exhaustiveSwitch utility to handle the switch statement without the need
// for an extra function invocation and object creation
// Note: I want to note that it would probably be better to define this mapped object outside of the component
// to avoid re-creating the object on each iteration of the loop.
export function WithExhaustiveSwitch({ interactions }: { interactions: Interaction[] }) {
  return (
    <div className="flex flex-col gap-2">
      {interactions.map((interaction) =>
        exhaustiveSwitch(interaction, 'type', {
          addToCart: ProductSelector,
          applyDiscountCode: Input,
        }),
      )}
    </div>
  );
}

// This demonstrates how to use it with inline components
export function WithExhaustiveSwitchInline({ interactions }: { interactions: Interaction[] }) {
  return (
    <div className="flex flex-col gap-2">
      {interactions.map((interaction) =>
        exhaustiveSwitch(interaction, 'type', {
          addToCart: ({ selectedProductIds }) => (
            <ProductSelector selectedProductIds={selectedProductIds} />
          ),
          applyDiscountCode: ({ code }) => <Input code={code} />,
        }),
      )}
    </div>
  );
}

function ProductSelector({ selectedProductIds }: { selectedProductIds: number[] }) {
  return selectedProductIds.join(', ');
}

function Input({ code }: { code: string }) {
  return <input type="text" value={code} readOnly className="border p-2" />;
}
