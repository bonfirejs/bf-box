import Ember from 'ember';
import layout from '../templates/components/bf-box';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['box'],
  classNameBindings: ['boxColorClass'],
  boxColorClass: function() {
    return this.get('color') ? 'box-' + this.get('color') : '';
  }.property('color')
});
