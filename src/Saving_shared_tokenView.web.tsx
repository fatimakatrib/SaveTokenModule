import * as React from 'react';

import { Saving_shared_tokenViewProps } from './Saving_shared_token.types';

export default function Saving_shared_tokenView(props: Saving_shared_tokenViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
