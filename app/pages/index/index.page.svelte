<Topbar/>

<Heading title="Roadmap" subtitle="Follow our release notes and other important milestones." />

<button on:click="goto('users')">Goto Users</button>

<script>
  import roadtrip from 'roadtrip';
  import Topbar from '../../components/topbar/topbar.component';
  import Heading from '../../components/heading/heading.component';

  export default {
    methods: {
      goto(path) {
        roadtrip.goto(path);
      }
    },

    components: {
      Topbar,
      Heading
    }
  }
</script>