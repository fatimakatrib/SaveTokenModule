import { requireNativeView } from 'expo';
import * as React from 'react';

import { Saving_shared_tokenViewProps } from './Saving_shared_token.types';

const NativeView: React.ComponentType<Saving_shared_tokenViewProps> =
  requireNativeView('Saving_shared_token');

export default function Saving_shared_tokenView(props: Saving_shared_tokenViewProps) {
  return <NativeView {...props} />;
}
