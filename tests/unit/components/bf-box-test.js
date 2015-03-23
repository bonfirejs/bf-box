import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bf-box', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('has the .box class', function(assert) {
  assert.ok(this.$().hasClass('box'));
});
