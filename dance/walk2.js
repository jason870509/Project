var pose1 = {
    bodyX: 0.01,
    bodyY: 120,
    bodyZ: 0.1,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.96528365791701933,
    upperBodyY: 0.01,
    upperBodyZ: 0.01,
    lowerBodyX: 0.01,
    lowerBodyY: 0.01,
    lowerBodyZ: 0.01,
    rightUpperArmX: -0.5,
    rightUpperArmY: 0.1,
    rightUpperArmZ: 0.1,
    rightLowerArmX: -0.5,
    leftUpperArmX: -0.5,
    leftUpperArmY: -0.019,
    leftUpperArmZ: 0.01,
    leftLowerArmX: -0.5,
    rightUpperLegX: -2.427829698857736,
    rightUpperLegY: 0.01,
    rightUpperLegZ: 0.01447925486875512,
    rightLowerLegX: 2.2200415368639668,
    rightLowerLegY: 0.01,
    rightLowerLegZ: 0.01,
    leftUpperLegX: 0.01,
    leftUpperLegY: 0.01,
    leftUpperLegZ: 0.01,
    leftLowerLegX: 0.1,
    leftLowerLegY: 0.01,
    leftLowerLegZ: 0.01,
    rightFeetX: 0.1,
    rightFeetZ: 0.1,
    leftFeetX: 0.3229491173416408,
    leftFeetZ: 0.3229491173416408,
    rightHandX: 0.1,
    rightHandZ: 0.3,
    leftHandX: 0.1,
    leftHandZ: -0.3,
    headX: -0.817445482866043,
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
    rightLowerArmX: -0.8,
    leftUpperArmX: -0.01,
    leftUpperArmY: 0.01,
    leftUpperArmZ: 0.01,
    leftLowerArmX: -0.5,
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
    leftFeetX: 0.01,
    leftFeetZ: 0.01,
    rightHandX: 0.01,
    rightHandZ: 0.01,
    leftHandX: 0.01,
    leftHandZ: 0.01,
    headX: 0.01,
    headY: 0.001,
    headZ: 0.001
}

var pose3 = {
    bodyX: 0.01,
    bodyY: 120,
    bodyZ: 0.1,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.96528365791701933,
    upperBodyY: 0.01,
    upperBodyZ: 0.01,
    lowerBodyX: 0.01,
    lowerBodyY: 0.01,
    lowerBodyZ: 0.01,
    rightUpperArmX: -0.5,
    rightUpperArmY: 0.1,
    rightUpperArmZ: 0.1,
    rightLowerArmX: -0.5,
    leftUpperArmX: -0.5,
    leftUpperArmY: -0.019,
    leftUpperArmZ: 0.01,
    leftLowerArmX: -0.5,
    rightUpperLegX: -0.024894157493648983,
    rightUpperLegY: 0.01,
    rightUpperLegZ: 0.01,
    rightLowerLegX: 0.1,
    rightLowerLegY: 0.01,
    rightLowerLegZ: 0.01,
    leftUpperLegX: -2.427829698857736,
    leftUpperLegY: 0.01,
    leftUpperLegZ: 0.01447925486875512,
    leftLowerLegX: 2.2200415368639668,
    leftLowerLegY: 0.01,
    leftLowerLegZ: 0.01,
    rightFeetX: 0.1,
    rightFeetZ: 0.1,
    leftFeetX: 0.3229491173416408,
    leftFeetZ: 0.3229491173416408,
    rightHandX: 0.01,
    rightHandZ: 0.3,
    leftHandX: 0.1,
    leftHandZ: -0.3,
    headX: -0.817445482866043,
    headY: 0.001,
    headZ: 0.001
}

var walk2T = 3;
var walk2Keys = [
    [0, pose2],
    [0.15, pose1],
    [0.2, pose2],
    [0.5, pose2],
    [0.65, pose3],
    [0.7, pose2],
    [1, pose2]
];

function loadJSON() {
    return {
        "remembered": {
            "pose1": {
                "0": {
                    "bodyX": 0.01,
                    "bodyY": 128,
                    "bodyZ": 0.1,
                    "bodyRX": 0.001,
                    "bodyRY": 0.001,
                    "bodyRZ": 0.001,
                    "upperBodyX": 0.36528365791701933,
                    "rightUpperArmX": -0.28452751817237854,
                    "rightUpperArmY": -0.019,
                    "rightUpperArmZ": -0.028873835732430297,
                    "rightLowerArmX": -1.3027265029635902,
                    "leftUpperArmX": 0.9505503810330227,
                    "leftUpperArmY": -0.018691588785046953,
                    "leftUpperArmZ": 0.18789161727349724,
                    "leftLowerArmX": -1.208433530906012,
                    "rightUpperLegX": -2.427829698857736,
                    "rightUpperLegY": 0.01,
                    "rightUpperLegZ": 0.01447925486875512,
                    "rightLowerLegX": 2.2200415368639668,
                    "rightLowerLegY": 0.01,
                    "rightLowerLegZ": 0.01,
                    "leftUpperLegX": 0.01,
                    "leftUpperLegY": 0.01,
                    "leftUpperLegZ": 0.01,
                    "leftLowerLegX": 0.1,
                    "leftLowerLegY": 0.01,
                    "leftLowerLegZ": 0.01,
                    "rightFeetX": 0.3229491173416408,
                    "leftFeetX": 0.01,
                    "rightHandX": -0.14226375908618927,
                    "rightHandY": 0.12357217030114231,
                    "leftHandX": 0.1,
                    "leftHandY": 0.190031152647975,
                    "headX": -0.417445482866043,
                    "headY": 0.001,
                    "headZ": 0.001
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
                    "bodyX": 0.01,
                    "bodyY": 128,
                    "bodyZ": 0.1,
                    "bodyRX": 0.001,
                    "bodyRY": 0.001,
                    "bodyRZ": 0.001,
                    "upperBodyX": 0.36528365791701933,
                    "rightUpperArmX": -0.28452751817237854,
                    "rightUpperArmY": -0.019,
                    "rightUpperArmZ": -0.028873835732430297,
                    "rightLowerArmX": -1.3027265029635902,
                    "leftUpperArmX": 0.9505503810330227,
                    "leftUpperArmY": -0.018691588785046953,
                    "leftUpperArmZ": 0.18789161727349724,
                    "leftLowerArmX": -1.208433530906012,
                    "rightUpperLegX": -0.024894157493648983,
                    "rightUpperLegY": 0.01,
                    "rightUpperLegZ": 0.01,
                    "rightLowerLegX": 0.1,
                    "rightLowerLegY": 0.01,
                    "rightLowerLegZ": 0.01,
                    "leftUpperLegX": -1.8535825545171338,
                    "leftUpperLegY": 0.01,
                    "leftUpperLegZ": 0.01447925486875512,
                    "leftLowerLegX": 1.6401185436071126,
                    "leftLowerLegY": 0.01,
                    "leftLowerLegZ": 0.01,
                    "rightFeetX": 0.1,
                    "leftFeetX": 0.3229491173416408,
                    "rightHandY": 0.12357217030114231,
                    "leftHandY": 0.190031152647975,
                    "rightHandX": -0.14226375908618927,
                    "leftHandX": 0.1,
                    "headX": -0.417445482866043,
                    "headY": 0.001,
                    "headZ": 0.001
                }
            }
        },
        "preset": "",
        "closed": false,
        "folders": {}
    }
}