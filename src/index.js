// import F2 from '@antv/f2';
import F2 from '@antv/f2/lib/index-all';
// import F2 from "./lib/f2-all"

import ScrollBar from '@antv/f2/lib/plugin/scroll-bar';


function wrapEvent(e) {
  if (!e) return;
  if (!e.preventDefault) {
    e.preventDefault = function() {};
  }
  return e;
}

Component({
  properties: {
    onRender: {
      type: Function,
      value: () => {}
    },
    id: {
      type: String,
      value: '__jw-f2-canvas'
    }
  },
  lifetimes: {
    ready() {
      F2.Chart.plugins.register(ScrollBar);
      const query = wx.createSelectorQuery().in(this);
      query.select(`#${this.properties.id}`)
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        const { node, width, height } = res[0];
        const context = node.getContext('2d');
        const pixelRatio = wx.getSystemInfoSync().pixelRatio;
        node.width = width * pixelRatio;
        node.height = height * pixelRatio;

        const config = { context, width, height, pixelRatio };
        const that = this;
        this.triggerEvent('onRender', {
          F2, config, that
        })
      });
    },
  },
  methods: {
    touchStart(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) return;
      canvasEl.dispatchEvent('touchstart', wrapEvent(e));
    },
    touchMove(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) return;
      canvasEl.dispatchEvent('touchmove', wrapEvent(e));
    },
    touchEnd(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) return;
      canvasEl.dispatchEvent('touchend', wrapEvent(e));
    },
    press(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) return;
      canvasEl.dispatchEvent('press', wrapEvent(e));
    }
  }
})