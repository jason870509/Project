var pose1 = {
    bodyX: 0.1,
    bodyY: 120,
    bodyZ: 0.1,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.36528365791701933,
    upperBodyY: 0.01,
    upperBodyZ: 0.01,
    lowerBodyX: 0.01,
    lowerBodyY: 0.01,
    lowerBodyZ: 0.01,
    rightUpperArmX: 0.9505503810330227,
    rightUpperArmY: 0.01,
    rightUpperArmZ: 0.18789161727349724,
    rightLowerArmX: -1.208433530906012,
    leftUpperArmX: -1.7806943268416595,
    leftUpperArmY: 0.01,
    leftUpperArmZ: -0.028873835732430297,
    leftLowerArmX: -1.3027265029635902,
    rightUpperLegX: -1.9270110076206604,
    rightUpperLegY: 0.01,
    rightUpperLegZ: 0.01,
    rightLowerLegX: 1.6401185436071126,
    rightLowerLegY: 0.01,
    rightLowerLegZ: 0.01,
    leftUpperLegX: 0.01,
    leftUpperLegY: 0.01,
    leftUpperLegZ: 0.01,
    leftLowerLegX: -0.1,
    leftLowerLegY: 0.01,
    leftLowerLegZ: 0.01,
    rightFeetX: 0.9068077900084675,
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

var pose2 = {
    bodyX: 0.1,
    bodyY: 120,
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
    bodyY: 120,
    bodyZ: 0.1,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.36528365791701933,
    upperBodyY: 0.01,
    upperBodyZ: 0.01,
    lowerBodyX: 0.01,
    lowerBodyY: 0.01,
    lowerBodyZ: 0.01,
    rightUpperArmX: -1.7806943268416595,
    rightUpperArmY: 0.01,
    rightUpperArmZ: -0.028873835732430297,
    rightLowerArmX: -1.3027265029635902,
    leftUpperArmX: 0.9505503810330227,
    leftUpperArmY: 0.01,
    leftUpperArmZ: 0.18789161727349724,
    leftLowerArmX: -1.208433530906012,
    rightUpperLegX: -0.024894157493648983,
    rightUpperLegY: 0.01,
    rightUpperLegZ: 0.01,
    rightLowerLegX: 0.1,
    rightLowerLegY: 0.01,
    rightLowerLegZ: 0.01,
    leftUpperLegX: -1.9270110076206604,
    leftUpperLegY: 0.01,
    leftUpperLegZ: 0.01447925486875512,
    leftLowerLegX: 1.6401185436071126,
    leftLowerLegY: 0.01,
    leftLowerLegZ: 0.01,
    rightFeetX: 0.1,
    rightFeetZ: 0.1,
    leftFeetX: 0.9068077900084675,
    leftFeetZ: 0.3229491173416408,
    rightHandX: 0.01,
    rightHandZ: 0.01,
    leftHandX: 0.01,
    leftHandZ: 0.01,
    headX: 0.01,
    headY: 0.001,
    headZ: 0.001
}

var walkT = 3;
var walkKeys = [
    [0, pose2],
    [0.1, pose1],
    [0.2, pose1],
    [0.5, pose2],
    [0.6, pose3],
    [0.7, pose3],
    [1, pose2]
];

function loadJSON() {
    return {
        "remembered": {
            "pose1": {
                "0": {
                    "bodyY": 128,
                    "upperBodyX": 0.36528365791701933,
                    "rightUpperArmX": 0.9505503810330227,
                    "rightUpperArmZ": 0.18789161727349724,
                    "rightLowerArmX": -1.208433530906012,
                    "rightLowerArmZ": 0.01,
                    "leftUpperArmX": -1.7806943268416595,
                    "leftUpperArmZ": -0.028873835732430297,
                    "leftLowerArmX": -1.3027265029635902,
                    "leftLowerArmZ": -0.5968331922099916,
                    "rightUpperLegX": -1.9270110076206604,
                    "rightUpperLegZ": 0.01,
                    "rightLowerLegX": 1.6401185436071126,
                    "rightLowerLegZ": 0.01,
                    "leftUpperLegX": 0.01,
                    "leftUpperLegZ": 0.01,
                    "leftLowerLegX": 0.1,
                    "leftLowerLegZ": 0.01,
                    "rightFeetX": 0.9068077900084675,
                    "leftFeetX": 0.1
                }
            },
            "pose2": {
                "0": {
                    "bodyY": 128,
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
            "pose3": {
                "0": {
                    "bodyY": 128,
                    "upperBodyX": 0.36528365791701933,
                    "rightUpperArmX": -1.7806943268416595,
                    "rightUpperArmZ": -0.028873835732430297,
                    "rightLowerArmX": -1.3027265029635902,
                    "rightLowerArmZ": 0.5968331922099916,
                    "leftUpperArmX": 0.9505503810330227,
                    "leftUpperArmZ": 0.18789161727349724,
                    "leftLowerArmX": -1.208433530906012,
                    "leftLowerArmZ": 0.01,
                    "rightUpperLegX": -0.024894157493648983,
                    "rightUpperLegZ": 0.01,
                    "rightLowerLegX": 0.1,
                    "rightLowerLegZ": 0.01,
                    "leftUpperLegX": -1.9270110076206604,
                    "leftUpperLegZ": 0.01447925486875512,
                    "leftLowerLegX": 1.6401185436071126,
                    "leftLowerLegZ": 0.01,
                    "rightFeetX": 0.1,
                    "leftFeetX": 0.9068077900084675
                }
            }
        },
        "preset": "",
        "closed": false,
        "folders": {}
    }
}