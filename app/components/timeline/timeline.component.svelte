<div class="TimelineComp">
  {{#each timeline as item}}
  <div class="release">
    <div class="type">CORE</div>
    <h3 class="name"><a href="https://github.com/peercoin/peercoin/releases/tag/{{item.tag.name}}">{{item.tag.name}}</a></h3>
    <div class="changelog">{{{nlToBr(item.tag.target.message)}}}</div>
    <div class="release-link">
      <a href="https://github.com/peercoin/peercoin/releases/tag/{{item.tag.name}}">Go to Release in GitHub.</a>
    </div>
  </div>
  {{/each}}
</div>

<script>
  export default {
    helpers: {
      nlToBr(string) {
        return string.replace(/\n/g, '<br>');
      }
    }
  }
</script>