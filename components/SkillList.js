var React = require('react');

var SkillList = React.createClass({

 render() {
    if (this.props.data.length > 0) {
      return (
        <div>
          {
            this.props.data.map(function (skill) {
              return <div>{skill.name}</div>
            })
          }
        </div>
      );
    }
    
    return (<span> Type a skill to see Awesome...</span>);
  }


});

module.exports = SkillList;