var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//
//   render: function () {
//
//     return (
//       <div>
//         <Nav/>
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//     );
//
//   }
//
// });

//insread
var Main = (props) => {
  return (
     <div>
       <Nav/>
       <div>
          <div>
            <p>Main.jsx rendered</p>
            {props.children}
          </div>
       </div>

     </div>
   );
};

module.exports = Main;
