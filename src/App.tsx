import './App.css';
import {
  InteractionEditor,
  InteractionEditorImproved,
} from './examples/OriginalSwitchStatementsUsage';
import { WithExhaustiveSwitch, WithExhaustiveSwitchInline } from './examples/WithExhaustiveSwitch';
import type { Interaction } from './lib/types';

const interactions: Interaction[] = [
  { type: 'addToCart', selectedProductIds: [1, 2, 3] },
  { type: 'applyDiscountCode', code: 'SUMMER2023' },
];

function App() {
  return (
    <>
      <p>Interaction editor</p>
      <InteractionEditor interactions={interactions} />
      <p>Interaction editor mapped</p>
      <InteractionEditorImproved interactions={interactions} />
      <p>With exhaustive switch</p>
      <WithExhaustiveSwitch interactions={interactions} />
      <p>With exhaustive switch inline</p>
      <WithExhaustiveSwitchInline interactions={interactions} />
    </>
  );
}

export default App;
