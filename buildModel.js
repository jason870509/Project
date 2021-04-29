function buildUpperTorso() {
    Group = new THREE.Object3D();
    waist = new THREE.Mesh(new THREE.SphereGeometry(8, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    upperTorso = new THREE.Mesh(new THREE.CylinderGeometry(30, 10, 30, 5), new THREE.MeshPhongMaterial({ color: 0xff88ff }));
    upperTorso.position.set(0, 20, 0);
    waist.add(upperTorso);
    Group.add(waist);

    leftShoulder = new THREE.Object3D();
    leftClavicle = new THREE.Mesh(new THREE.BoxGeometry(30, 5, 10), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    leftShoulder.position.set(15, 15, 0);
    leftShoulder.add(leftClavicle);

    rightShoulder = new THREE.Object3D();
    rightClavicle = new THREE.Mesh(new THREE.BoxGeometry(30, 5, 10), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    rightShoulder.position.set(-15, 15, 0);
    rightShoulder.add(rightClavicle);
    upperTorso.add(leftShoulder, rightShoulder);

    return [Group, leftShoulder, rightShoulder];
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
    var upperLeg = new THREE.Mesh(new THREE.BoxGeometry(12, 52, 12), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    upperLeg.position.y = -20;

    lowerLegGroup = new THREE.Object3D();
    lowerLegGroup.position.set(0, -40, 0);

    var knee = new THREE.Mesh(new THREE.SphereGeometry(6, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    var lowerLeg = new THREE.Mesh(new THREE.BoxGeometry(8, 48, 8), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
    lowerLeg.position.y = -20;

    feetGroup = new THREE.Object3D();
    feetGroup.position.set(0, -43, 0);
    feetJoint = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    feet = new THREE.Mesh(new THREE.BoxGeometry(10, 7, 30), new THREE.MeshPhongMaterial({ color: 0xff0000 }));
    feet.position.set(0, -5, 10);

    feetGroup.add(feetJoint, feet);
    upperLegGroup.add(upperLegJoint, upperLeg, lowerLegGroup);
    lowerLegGroup.add(knee, lowerLeg, feetGroup);

    return [upperLegGroup, lowerLegGroup, feetGroup];
}

// class LinkLeg {
//     constructor() {
//         this.theta1 = 0;
//         this.theta2 = 0;
//         this.target = new THREE.Vector3();
//     }

//     init() {
//         // Left Leg
//         this.body = new THREE.Object3D();
//         this.upperLegGroup = new THREE.Object3D();

//         this.upperLegJoint = new THREE.Mesh(new THREE.SphereGeometry(7, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
//         this.upperLeg = new THREE.Mesh(new THREE.BoxGeometry(12, 52, 12), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
//         this.upperLeg.position.y = -26;

//         this.lowerLegGroup = new THREE.Object3D();
//         this.lowerLegGroup.position.set(0, -52, 0);

//         this.knee = new THREE.Mesh(new THREE.SphereGeometry(6, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
//         this.lowerLeg = new THREE.Mesh(new THREE.BoxGeometry(8, 48, 8), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
//         this.lowerLeg.position.y = -24;

//         this.feetGroup = new THREE.Object3D();
//         this.feetGroup.position.set(0, -45, 0);
//         this.feetJoint = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
//         this.feet = new THREE.Mesh(new THREE.BoxGeometry(30, 7, 10), new THREE.MeshPhongMaterial({ color: 0xff00ff }));
//         this.feet.position.set(10, -5, 0);
//         // this.feet.rotation.y = -Math.PI / 2;
//         this.feetGroup.add(this.feetJoint, this.feet);

//         this.upperLegGroup.add(this.upperLegJoint, this.upperLeg, this.lowerLegGroup);
//         this.lowerLegGroup.add(this.knee, this.lowerLeg, this.feetGroup);

//         this.body.add(this.upperLegGroup);

//         return this.body;
//     }
//     update(thetas) {
//         this.theta1 = thetas[0]
//         this.theta2 = thetas[1]
//         this.upperLegGroup.rotation.z = this.theta1
//         this.lowerLegGroup.rotation.z = this.theta2
//     }
// }

function buildHead() {
    headGroup = new THREE.Object3D();
    headGroup.position.set(0, 40, 0);

    headJoint = new THREE.Mesh(new THREE.SphereGeometry(5, 80), new THREE.MeshPhongMaterial({ color: 0xffff00 }));

    head = new THREE.Mesh(new THREE.CylinderGeometry(10, 5, 20, 80), new THREE.MeshPhongMaterial({ color: 0xff00ff }))
    head.position.set(0, 10, 0);
    face = new THREE.Mesh(new THREE.BoxGeometry(18, 8, 5), new THREE.MeshPhongMaterial({ color: 0xffff00 }));
    face.position.set(0, 5, 10);
    head.add(face);
    headGroup.add(headJoint, head);

    return headGroup;
}