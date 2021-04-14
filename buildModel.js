function buildUpperTorso() {
    Group = new THREE.Object3D();
    waist = new THREE.Mesh(new THREE.SphereGeometry(8, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    upperTorso = new THREE.Mesh(new THREE.CylinderGeometry(30, 10, 30, 5), new THREE.MeshPhongMaterial({ color: 0xff88ff }));
    upperTorso.position.set(0, 20, 0);
    waist.add(upperTorso);
    Group.add(waist);
    return Group;
}

function buildLowerTorso() {
    Group = new THREE.Object3D();
    lowerTorso = new THREE.Mesh(new THREE.CylinderGeometry(15, 10, 25, 32), new THREE.MeshPhongMaterial({ color: 0xff88ff }));
    lowerTorso.position.set(0, -18, 0);
    Group.add(lowerTorso);
    return Group;
}

function buildArm() {
    upperArmGroup = new THREE.Object3D();

    var shoulder = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    var upperArm = new THREE.Mesh(new THREE.BoxGeometry(8, 40, 8), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    upperArm.position.y = -20;

    lowerArmGroup = new THREE.Object3D();
    lowerArmGroup.position.set(0, -40, 0);

    var elbow = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));

    var lowerArm = new THREE.Mesh(new THREE.BoxGeometry(8, 40, 8), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    lowerArm.position.y = -20;

    handGroup = new THREE.Object3D();
    handGroup.position.set(0, -43, 0);
    handJoint = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    hand = new THREE.Mesh(new THREE.BoxGeometry(5, 20, 10), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    hand.position.set(0, -12, 0);
    hand2 = new THREE.Mesh(new THREE.BoxGeometry(5, 10, 5), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    hand2.position.set(0, -8, 6);

    handGroup.add(handJoint, hand, hand2);
    upperArmGroup.add(shoulder, upperArm, lowerArmGroup);
    lowerArmGroup.add(elbow, lowerArm, handGroup);
    return [upperArmGroup, lowerArmGroup, handGroup];
}

function buildLeg() {
    upperLegGroup = new THREE.Object3D();

    var upperLegJoint = new THREE.Mesh(new THREE.SphereGeometry(7, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    var upperLeg = new THREE.Mesh(new THREE.BoxGeometry(12, 40, 12), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    upperLeg.position.y = -20;

    lowerLegGroup = new THREE.Object3D();
    lowerLegGroup.position.set(0, -40, 0);

    var knee = new THREE.Mesh(new THREE.SphereGeometry(6, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    var lowerLeg = new THREE.Mesh(new THREE.BoxGeometry(8, 40, 8), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    lowerLeg.position.y = -20;

    feetGroup = new THREE.Object3D();
    feetGroup.position.set(0, -43, 0);
    feetJoint = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    feet = new THREE.Mesh(new THREE.BoxGeometry(10, 7, 30), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    feet.position.set(0, -5, 10);

    feetGroup.add(feetJoint, feet);
    upperLegGroup.add(upperLegJoint, upperLeg, lowerLegGroup);
    lowerLegGroup.add(knee, lowerLeg, feetGroup);

    return [upperLegGroup, lowerLegGroup, feetGroup];
}

function buildHead() {
    headGroup = new THREE.Object3D();
    headGroup.position.set(0, 40, 0);

    headJoint = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));

    head = new THREE.Mesh(new THREE.CylinderGeometry(10, 5, 20, 80), new THREE.MeshPhongMaterial({ color: 0xff00ff }))
    head.position.set(0, 10, 0);
    headGroup.add(headJoint, head);

    return headGroup;
}