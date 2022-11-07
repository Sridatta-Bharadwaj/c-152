// Registering component in box-component.js
AFRAME.registerComponent("move-camera", {
    schema: {
      moveZ: { type: "number", default: 10 },
    },
  
    tick: function () {
      var pos = this.el.getAttribute("position");
  
      this.data.moveZ = this.data.moveZ + 0.01;
  
      pos.z = this.data.moveZ;
  
      this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
  });
  