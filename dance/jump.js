var pose1 = {
    bodyX: 0.1,
    bodyY: 250,
    bodyZ: 0.1,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.01,
    upperBodyY: 0.01,
    upperBodyZ: 0.01,
    lowerBodyX: 0.01,
    lowerBodyY: 0.01,
    lowerBodyZ: 0.01,
    rightUpperArmX: -1.39,
    rightUpperArmY: 0.01,
    rightUpperArmZ: 0.01,
    rightLowerArmX: -2,
    leftUpperArmX: -1.39,
    leftUpperArmY: 0.01,
    leftUpperArmZ: 0.01,
    leftLowerArmX: -2,
    rightUpperLegX: 0.01,
    rightUpperLegY: 0.01,
    rightUpperLegZ: 0.01,
    rightLowerLegX: 1.5,
    rightLowerLegY: 0.01,
    rightLowerLegZ: 0.01,
    leftUpperLegX: 0.01,
    leftUpperLegY: 0.01,
    leftUpperLegZ: 0.01,
    leftLowerLegX: 1.5,
    leftLowerLegY: 0.01,
    leftLowerLegZ: 0.01,
    rightFeetX: 0.73,
    rightFeetZ: 0.1,
    leftFeetX: 0.73,
    leftFeetZ: 0.1,
    rightHandX: 0.01,
    rightHandZ: 0.01,
    leftHandX: 0.01,
    leftHandZ: 0.01,
    headX: 0.01,
    headY: 0.001,
    headZ: 0.001
}

var pose2 = {
    bodyX: 0.1,
    bodyY: 127,
    bodyZ: 0.1,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.01,
    upperBodyY: 0.01,
    upperBodyZ: 0.01,
    lowerBodyX: 0.01,
    lowerBodyY: 0.01,
    lowerBodyZ: 0.01,
    rightUpperArmX: 0.01,
    rightUpperArmY: 0.01,
    rightUpperArmZ: 0.01,
    rightLowerArmX: 0.1,
    leftUpperArmX: 0.01,
    leftUpperArmY: 0.01,
    leftUpperArmZ: 0.01,
    leftLowerArmX: 0.1,
    rightUpperLegX: 0.01,
    rightUpperLegY: 0.01,
    rightUpperLegZ: 0.01,
    rightLowerLegX: -0.1,
    rightLowerLegY: 0.01,
    rightLowerLegZ: 0.01,
    leftUpperLegX: 0.01,
    leftUpperLegY: 0.01,
    leftUpperLegZ: 0.01,
    leftLowerLegX: -0.1,
    leftLowerLegY: 0.01,
    leftLowerLegZ: 0.01,
    rightFeetX: 0.1,
    rightFeetZ: 0.1,
    leftFeetX: 0.1,
    leftFeetZ: 0.1,
    rightHandX: 0.01,
    rightHandZ: 0.01,
    leftHandX: 0.01,
    leftHandZ: 0.01,
    headX: 0.01,
    headY: 0.001,
    headZ: 0.001
}

var pose3 = {
    bodyX: 0.1,
    bodyY: 101.52582557154953,
    bodyZ: -24,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.4140558848433531,
    upperBodyY: 0.01,
    upperBodyZ: 0.01,
    lowerBodyX: 0.01,
    lowerBodyY: 0.01,
    lowerBodyZ: 0.01,
    rightUpperArmX: 0.804,
    rightUpperArmY: 0.01,
    rightUpperArmZ: 0.01,
    rightLowerArmX: -0.68,
    leftUpperArmX: 0.804,
    leftUpperArmY: 0.01,
    leftUpperArmZ: 0.01,
    leftLowerArmX: -0.68,
    rightUpperLegX: -1,
    rightUpperLegY: 0.01,
    rightUpperLegZ: 0.1,
    rightLowerLegX: 1.58,
    rightLowerLegY: 0.01,
    rightLowerLegZ: 0.01,
    leftUpperLegX: -1,
    leftUpperLegY: 0.01,
    leftUpperLegZ: 0.1,
    leftLowerLegX: 1.58,
    leftLowerLegY: 0.01,
    leftLowerLegZ: 0.024572396274343822,
    rightFeetX: -0.5,
    rightFeetZ: 0.1,
    leftFeetX: -0.5,
    leftFeetZ: 0.1,
    rightHandX: 0.01,
    rightHandZ: 0.01,
    leftHandX: 0.01,
    leftHandZ: 0.01,
    headX: 0.01,
    headY: 0.001,
    headZ: 0.001
}
var jumpT = 3;
var jumpKeys = [
    [0, pose2],
    [0.3, pose3],
    [0.5, pose1],
    [0.7, pose2],
    [0.8, pose3],
    [0.9, pose2],
    [1, pose2]
];

function loadJSON() {
    return {
        "remembered": {
            "pose2": {
                "0": {
                    "bodyY": 128,
                    "bodyZ": 0.1,
                    "upperBodyX": 0.1,
                    "rightUpperArmX": 0.01,
                    "rightUpperArmZ": 0.01,
                    "rightLowerArmX": 0.1,
                    "rightLowerArmZ": 0.01,
                    "leftUpperArmX": 0.01,
                    "leftUpperArmZ": 0.01,
                    "leftLowerArmX": 0.1,
                    "leftLowerArmZ": 0.01,
                    "rightUpperLegX": 0.01,
                    "rightUpperLegZ": 0.01,
                    "rightLowerLegX": -0.1,
                    "rightLowerLegZ": 0.01,
                    "leftUpperLegX": 0.01,
                    "leftUpperLegZ": 0.01,
                    "leftLowerLegX": -0.1,
                    "leftLowerLegZ": 0.01,
                    "rightFeetX": 0.1,
                    "leftFeetX": 0.1
                }
            },
            "pose1": {
                "0": {
                    "bodyY": 174.8563082133785,
                    "bodyZ": 0.1,
                    "upperBodyX": 0.1,
                    "rightUpperArmX": -1.39,
                    "rightUpperArmZ": 0.01,
                    "rightLowerArmX": -2,
                    "rightLowerArmZ": 0.01,
                    "leftUpperArmX": -1.39,
                    "leftUpperArmZ": 0.01,
                    "leftLowerArmX": -2,
                    "leftLowerArmZ": 0.01,
                    "rightUpperLegX": 0.01,
                    "rightUpperLegZ": 0.01,
                    "rightLowerLegX": 1.5,
                    "rightLowerLegZ": 0.01,
                    "leftUpperLegX": 0.01,
                    "leftUpperLegZ": 0.01,
                    "leftLowerLegX": 1.5,
                    "leftLowerLegZ": 0.01,
                    "rightFeetX": 0.73,
                    "leftFeetX": 0.73
                }
            },
            "pose3": {
                "0": {
                    "bodyY": 101.52582557154953,
                    "bodyZ": -24,
                    "upperBodyX": 0.4140558848433531,
                    "rightUpperArmX": 0.804,
                    "rightUpperArmZ": 0.01,
                    "rightLowerArmX": -0.68,
                    "rightLowerArmZ": 0.01,
                    "leftUpperArmX": 0.804,
                    "leftUpperArmZ": 0.01,
                    "leftLowerArmX": -0.68,
                    "leftLowerArmZ": 0.01,
                    "rightUpperLegX": -1,
                    "rightUpperLegZ": 0.1,
                    "rightLowerLegX": 1.58,
                    "rightLowerLegZ": 0.01,
                    "leftUpperLegX": -1,
                    "leftUpperLegZ": 0.1,
                    "leftLowerLegX": 1.58,
                    "leftLowerLegZ": 0.024572396274343822,
                    "rightFeetX": -0.5,
                    "leftFeetX": -0.5
                }
            }
        },
        "preset": "",
        "closed": false,
        "folders": {}
    }
}