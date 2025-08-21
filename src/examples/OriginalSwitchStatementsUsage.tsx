// This is the original version that OP posted - I dind't address that in any of my changes
// but I will note that none of these versions are providing a `key` prop for the mapped components
// which will cause all kinds of issues in React.

import type { Interaction } from '../lib/types';

export function InteractionEditor({ interactions }: { interactions: Interaction[] }) {
  return (
    <div className="flex flex-col gap-2">
      {interactions.map((interaction) => {
        let content: React.ReactNode;
        switch (interaction.type) {
          case 'addToCart':
            content = <ProductSelector selectedProductIds={interaction.selectedProductIds} />;
            break;
          case 'applyDiscountCode':
            content = <Input code={interaction.code} />;
            break;
        }
        return content;
      })}
    </div>
  );
}

// The original was doing an unnecessary assignment to `content` before returning it.
// This version directly returns the component based on the interaction type.
export function InteractionEditorImproved({ interactions }: { interactions: Interaction[] }) {
  return (
    <div className="flex flex-col gap-2">
      {interactions.map((interaction) => {
        switch (interaction.type) {
          case 'addToCart':
            return <ProductSelector selectedProductIds={interaction.selectedProductIds} />;
          case 'applyDiscountCode':
            return <Input code={interaction.code} />;
        }
      })}
    </div>
  );
}

function ProductSelector({ selectedProductIds }: { selectedProductIds: number[] }) {
  return selectedProductIds.join(', ');
}

function Input({ code }: { code: string }) {
  return <input type="text" value={code} readOnly className="border p-2" />;
}
