<Topbar/>
<Heading title="Roadmap" subtitle="Follow our release notes and other important milestones." />

<div class="container">
  <div class="label">Show in timeline:</div>
  <Switcher options="{{switcherOptions}}" on:switched="receive(event)" />

  <hr>
</div>



<!-- <button on:click="goto('users')">Goto Users</button> -->

<script>
  import roadtrip from 'roadtrip';
  import Topbar from '../../components/topbar/topbar.component';
  import Heading from '../../components/heading/heading.component';
  import Switcher from '../../components/switcher/switcher.component';

  export default {
    data() {
      return {
        switcherOptions: [
          {
            label: 'All',
            selected: true
          },
          {
            label: 'Core',
            selected: false
          },
          {
            label: 'Community',
            selected: false
          }
        ]
      }
    },
    methods: {
      goto(path) {
        roadtrip.goto(path);
      },
      receive(e) {
        console.log(e);
      }
    },

    components: {
      Topbar,
      Heading,
      Switcher
    }
  }
</script>