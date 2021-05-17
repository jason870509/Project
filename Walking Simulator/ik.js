var axes = [];
var first = 1;
function fk(theta, joints) {
    /*
      // 不能這樣做，因為還在迭代階段，並沒有render
      joints[0] = new THREE.Vector3();
      joints[1] = link1.localToWorld (new THREE.Vector3(60,0,0))
      joints[2] = link2.localToWorld (new THREE.Vector3(90,0,0))
    */
    joints[0] = new THREE.Vector3(-35.3, 0, 0);

    var m = new THREE.Matrix4();
    // 這裡注意旋轉軸！！！！
    m.makeRotationZ(theta[0]);
    m.multiply(new THREE.Matrix4().makeTranslation(-35, 0, 0));
    var localzero = new THREE.Vector3(0, 0, 0);
    localzero.applyMatrix4(m);
    joints[1].copy(localzero);

    m.multiply(new THREE.Matrix4().makeRotationZ(theta[1]));
    m.multiply(new THREE.Matrix4().makeTranslation(-35, 0, 0));

    localzero.set(0, 0, 0);
    localzero.applyMatrix4(m);
    joints[2].copy(localzero);
}

function fk1(theta, joints) {
    /*
      // 不能這樣做，因為還在迭代階段，並沒有render
      joints[0] = new THREE.Vector3();
      joints[1] = link1.localToWorld (new THREE.Vector3(60,0,0))
      joints[2] = link2.localToWorld (new THREE.Vector3(90,0,0))
    */
    joints[0] = new THREE.Vector3(10.6, 0, 0);

    var m = new THREE.Matrix4();
    // 這裡注意旋轉軸！！！！
    m.makeRotationZ(theta[0]);
    m.multiply(new THREE.Matrix4().makeTranslation(35, 0, 0));
    var localzero = new THREE.Vector3(0, 0, 0);
    localzero.applyMatrix4(m);
    joints[1].copy(localzero);

    m.multiply(new THREE.Matrix4().makeRotationZ(theta[1]));
    m.multiply(new THREE.Matrix4().makeTranslation(35, 0, 0));

    localzero.set(0, 0, 0);
    localzero.applyMatrix4(m);
    joints[2].copy(localzero);

}

function setarm() {
    var axis = new CCD_axis(new THREE.Vector3(0, 0, 1), 0);
    // axis.limits = new THREE.Vector2(-Math.PI / 2, Math.PI / 2);
    axes.push(axis);

    var axis = new CCD_axis(new THREE.Vector3(0, 0, 1), 1);
    axis.limits = new THREE.Vector2(-Math.PI, -0.01);
    axes.push(axis);
}

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects([pickPlane]);

    if (intersects.length > 0) {
        target[1].copy(intersects[0].point);
        // console.log(target);
    }
}

function onWindowResize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}