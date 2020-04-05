import React, { Component } from 'react';

/* 
function Hello({ color, name, isSpecial }) {
    return (
        <div style={{ color }}>
            { isSpecial && <b>*</b> }
            안녕하세요 {name}
        </div>
    );
}
 */

 class Hello extends Component {
     render() {
         const { color, name, isSpecial } = this.props;

         return (
             <div style={{ color }}>
                 {isSpecial && <b>*</b>}
                 안녕하세요 {name}
             </div>
         );
     }
 }

Hello.defaultProps = {
    name: 'les'
}

export default Hello;