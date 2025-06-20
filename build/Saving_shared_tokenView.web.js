import * as React from 'react';
export default function Saving_shared_tokenView(props) {
    return (<div>
      <iframe style={{ flex: 1 }} src={props.url} onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}/>
    </div>);
}
//# sourceMappingURL=Saving_shared_tokenView.web.js.map