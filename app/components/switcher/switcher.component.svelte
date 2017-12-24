<div class="SwitcherComp">
  {{#each options as option}}
    <a href="#" class="option {{(option.selected) ? 'active' : ''}}" on:click="handleSwitch(option)">{{option.label}}</a>
  {{/each}}
</div>

<script>
  export default {
    methods: {
      handleSwitch(e) {
        const options = this.get('options');
        
        options.forEach((option, i) => {
          if (option.label === e.label) {
            options[i].selected = true;
          } else {
            options[i].selected = false;
          }
        });

        this.set({options: options});
        this.fire('switched', e);
      }
    }
  }
</script>