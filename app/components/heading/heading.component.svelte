<div class="HeadingComp" ref:background>
  <h1 class="title">{{title}}</h1>
  <h2 class="subtitle">{{subtitle}}</h2>
</div>

<script>
  export default {
    oncreate() {
      this.blob(this.refs.background, 600);
    },
    methods: {
      blob(sel, speed) {
        const el = sel;
        let elWidth = el.offsetWidth;
        let elHeight = el.offsetHeight;

        window.onresize = () => {
            elWidth = el.offsetWidth;
            elHeight = el.offsetHeight;
        };

        setInterval(() => {
            // If tab not visible, stop effects to prevent memory leak
            if (document.hidden) {
                return;
            }

            const div = document.createElement('DIV');
            div.classList.add('blob-logo');
            div.style.left = Math.floor(Math.random() * elWidth) + 'px';
            div.style.top = Math.floor(Math.random() * elHeight) + 'px';

            div.addEventListener('animationend', () => {
              div.parentNode.removeChild(div);
            });

            el.appendChild(div);
          }, speed);
      }
    }
  }
</script>