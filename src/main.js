import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// load and set the HTML template we are using
let audit_content = $(".audit-content");
audit_content.html(`<div id="app"></div>`);


new Vue({
  render: h => h(App),
}).$mount('#app')

// add help message
function add_help_message() {
  let helpMessage = `<p class='help-message'>
  Comments or feedback? Please contact
  <a href="mailto:controller.policy@phila.gov">controller.policy@phila.gov</a>.
  </p>`;
  $(".back-link").after(helpMessage);
}

// add a help message
add_help_message();