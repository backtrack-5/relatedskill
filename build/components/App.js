var React = require('react');
var request = require('request');


var Search = require('./Search');
var SkillList = require('./SkillList');

var App = React.createClass({

	getInitialState() {
		return {
			resp: "awesome..",
			data: []
		};
	},

	searchForSkill(skill) {
		var self = this;
		var url = 'http://api.stackexchange.com/2.2/tags/{tag}/related?site=stackoverflow';

		var options = {
			url: url,
			method: 'GET',
			json: true
		}

		url = url.replace('{tag}', skill);
		request(url, function (error, response, body) {
			var f = JSON.parse(body);
			console.log(f['items'][0]);
			self.setState({
				resp: body,
				data: f['items']
			});
		});
	},

	render() {

		return (

			<div>
				<h1>Find Related Skill</h1>
				<Search onSearch={this.searchForSkill} />
				<SkillList data={this.state.data} />
			</div>
		);
	}
});

module.exports = App;