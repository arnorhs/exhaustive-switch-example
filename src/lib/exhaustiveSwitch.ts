/* eslint-disable */

import type { ReactNode } from 'react';

// Note: I didn't bother with the overloaded version of exhaustiveSwitch - should be
// reasonably straightforward to add

type Switched<Subject, Key extends keyof Subject> = Subject[Key] extends string
  ? {
      [K in Subject[Key]]: (props: Omit<Extract<Subject, { [_k in Key]: K }>, Key>) => ReactNode;
    }
  : never;

export function exhaustiveSwitch<
  Subject,
  Key extends keyof Subject,
  Sw extends Switched<Subject, Key>,
>(item: Subject, key: Key, map: Sw): ReactNode {
  return map[item[key]](item);
}
