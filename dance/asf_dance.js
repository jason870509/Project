var pose1 = {
    bodyX: 0.01,
    bodyY: 128,
    bodyZ: 0.01,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.1,
    // rhumerus -42.2757 19.3184 -90.6312
    // rradius 79.2191
    // lhumerus -46.581 -10.5126 91.072
    // lradius 108.082
    rightUpperArmX: (180 - 42.2757) * (Math.PI / 180),
    rightUpperArmY: (-30 + 19.3184) * (Math.PI / 180),
    rightUpperArmZ: (-90 - 90.6312) * (Math.PI / 180),
    rightLowerArmX: (180 + 79.2191) * (Math.PI / 180),
    leftUpperArmX: (180 - 46.581) * (Math.PI / 180),
    leftUpperArmY: (30 - 10.5126) * (Math.PI / 180),
    leftUpperArmZ: (90 + 91.072) * (Math.PI / 180),
    leftLowerArmX: (180 + 108.082) * (Math.PI / 180),
    // rfemur 4.30283 -1.72433 25.7796
    // rtibia 82.7602
    rightUpperLegX: 4.30283 * (Math.PI / 180),
    rightUpperLegY: -1.72433 * (Math.PI / 180),
    rightUpperLegZ: 25.7796 * (Math.PI / 180),
    rightLowerLegX: 82.7602 * (Math.PI / 180),
    // lfemur -27.49 -2.09007 -20.1015
    // ltibia 38.398
    leftUpperLegX: -27.49 * (Math.PI / 180),
    leftUpperLegY: -2.09007 * (Math.PI / 180),
    leftUpperLegZ: -20.1015 * (Math.PI / 180),
    leftLowerLegX: 38.398 * (Math.PI / 180),
    rightFeetX: 0.1,
    leftFeetX: 0.1,
    rightHandY: 0.1,
    leftHandY: 0.1,
    rightHandX: 0.1,
    leftHandX: 0.1
}

var pose2 = {
    bodyX: 0.01,
    bodyY: 128,
    bodyZ: 0.01,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.1,
    // rhumerus -36.1895 10.4066 -83.9581
    // rradius 88.648
    // lhumerus -48.0428 -11.7782 92.6353
    // lradius 99.0286
    // 180 -30 -90   XYZ
    rightUpperArmX: (180 - 36.1895) * (Math.PI / 180),
    rightUpperArmY: (-30 + 10.4066) * (Math.PI / 180),
    rightUpperArmZ: (-90 - 83.9581) * (Math.PI / 180),
    rightLowerArmX: (180 + 88.648) * (Math.PI / 180),
    leftUpperArmX: (180 - 48.0428) * (Math.PI / 180),
    leftUpperArmY: (30 - 11.7782) * (Math.PI / 180),
    leftUpperArmZ: (90 + 92.6353) * (Math.PI / 180),
    leftLowerArmX: (180 + 99.0286) * (Math.PI / 180),
    // rfemur -19.059 7.94009 31.7107
    // rtibia 42.1913
    rightUpperLegX: -19.059 * (Math.PI / 180),
    rightUpperLegY: 7.94009 * (Math.PI / 180),
    rightUpperLegZ: (-20 + 31.7107) * (Math.PI / 180),
    rightLowerLegX: 42.1913 * (Math.PI / 180),
    // lfemur -10.761 13.1103 -7.74308
    // ltibia 110.063
    leftUpperLegX: -10.761 * (Math.PI / 180),
    leftUpperLegY: 13.1103 * (Math.PI / 180),
    leftUpperLegZ: (-20 - 7.74308) * (Math.PI / 180),
    leftLowerLegX: 110.063 * (Math.PI / 180),
    rightFeetX: 0.1,
    leftFeetX: 0.1,
    rightHandY: 0.1,
    leftHandY: 0.1,
    rightHandX: 0.1,
    leftHandX: 0.1
}

pose3 = {
    bodyX: 0.01,
    bodyY: 128,
    bodyZ: 0.01,
    bodyRX: 0.001,
    bodyRY: 0.001,
    bodyRZ: 0.001,
    upperBodyX: 0.1,
    // rhumerus -50.3814 7.95753 -89.0702
    // rradius 82.608
    // lhumerus -18.1223 -17.4609 86.4164
    // lradius 112.632
    // 180 -30 -90   XYZ
    rightUpperArmX: (180 - 50.3814) * (Math.PI / 180),
    rightUpperArmY: (-30 + 7.95753) * (Math.PI / 180),
    rightUpperArmZ: (-90 - 89.0702) * (Math.PI / 180),
    rightLowerArmX: (180 + 82.608) * (Math.PI / 180),
    leftUpperArmX: (180 - 18.1223) * (Math.PI / 180),
    leftUpperArmY: (30 - 17.4609) * (Math.PI / 180),
    leftUpperArmZ: (90 + 86.4164) * (Math.PI / 180),
    leftLowerArmX: (180 + 112.632) * (Math.PI / 180),
    // rfemur -30.2707 -3.8148 17.1005
    // rtibia 103.785
    rightUpperLegX: -30.2707 * (Math.PI / 180),
    rightUpperLegY: -3.8148 * (Math.PI / 180),
    rightUpperLegZ: (-20 + 17.1005) * (Math.PI / 180),
    rightLowerLegX: 103.785 * (Math.PI / 180),
    // lfemur -6.51187 -2.80483 -27.2091
    // ltibia 36.5018
    leftUpperLegX: -6.51187 * (Math.PI / 180),
    leftUpperLegY: -2.80483 * (Math.PI / 180),
    leftUpperLegZ: (-27.2091) * (Math.PI / 180),
    leftLowerLegX: 36.5018 * (Math.PI / 180),
    rightFeetX: 0.1,
    leftFeetX: 0.1,
    rightHandY: 0.1,
    leftHandY: 0.1,
    rightHandX: 0.1,
    leftHandX: 0.1
}

var asfT = 3;
var asfKeys = [
    [0, pose1],
    [0.25, pose2],
    [0.5, pose3],
    [0.75, pose2],
    [1, pose1]
];

function loadJSON() {
    return {
        "remembered": {
            "1": {
                "0": {
                    "bodyX": 0.01,
                    "bodyY": 128,
                    "bodyZ": 0.01,
                    "bodyRX": 0.001,
                    "bodyRY": 0.001,
                    "bodyRZ": 0.001,
                    "upperBodyX": 0.1,
                    // rhumerus -42.2757 19.3184 -90.6312
                    // rradius 79.2191
                    // lhumerus -46.581 -10.5126 91.072
                    // lradius 108.082
                    "rightUpperArmX": (180 - 42.2757) * (Math.PI / 180),
                    "rightUpperArmY": (-30 + 19.3184) * (Math.PI / 180),
                    "rightUpperArmZ": (-90 - 90.6312) * (Math.PI / 180),
                    "rightLowerArmX": (180 + 79.2191) * (Math.PI / 180),
                    "leftUpperArmX": (180 - 46.581) * (Math.PI / 180),
                    "leftUpperArmY": (30 - 10.5126) * (Math.PI / 180),
                    "leftUpperArmZ": (90 + 91.072) * (Math.PI / 180),
                    "leftLowerArmX": (180 + 108.082) * (Math.PI / 180),
                    // rfemur 4.30283 -1.72433 25.7796
                    // rtibia 82.7602
                    "rightUpperLegX": 4.30283 * (Math.PI / 180),
                    "rightUpperLegY": -1.72433 * (Math.PI / 180),
                    "rightUpperLegZ": 25.7796 * (Math.PI / 180),
                    "rightLowerLegX": 82.7602 * (Math.PI / 180),
                    // lfemur -27.49 -2.09007 -20.1015
                    // ltibia 38.398
                    "leftUpperLegX": -27.49 * (Math.PI / 180),
                    "leftUpperLegY": -2.09007 * (Math.PI / 180),
                    "leftUpperLegZ": -20.1015 * (Math.PI / 180),
                    "leftLowerLegX": 38.398 * (Math.PI / 180),
                    "rightFeetX": 0.1,
                    "leftFeetX": 0.1,
                    "rightHandY": 0.1,
                    "leftHandY": 0.1,
                    "rightHandX": 0.1,
                    "leftHandX": 0.1
                }

            },
            "2": {
                "0": {
                    "bodyX": 0.01,
                    "bodyY": 128,
                    "bodyZ": 0.01,
                    "bodyRX": 0.001,
                    "bodyRY": 0.001,
                    "bodyRZ": 0.001,
                    "upperBodyX": 0.1,
                    // rhumerus -36.1895 10.4066 -83.9581
                    // rradius 88.648
                    // lhumerus -48.0428 -11.7782 92.6353
                    // lradius 99.0286
                    // 180 -30 -90   XYZ
                    "rightUpperArmX": (180 - 36.1895) * (Math.PI / 180),
                    "rightUpperArmY": (-30 + 10.4066) * (Math.PI / 180),
                    "rightUpperArmZ": (-90 - 83.9581) * (Math.PI / 180),
                    "rightLowerArmX": (180 + 88.648) * (Math.PI / 180),
                    "leftUpperArmX": (180 - 48.0428) * (Math.PI / 180),
                    "leftUpperArmY": (30 - 11.7782) * (Math.PI / 180),
                    "leftUpperArmZ": (90 + 92.6353) * (Math.PI / 180),
                    "leftLowerArmX": (180 + 99.0286) * (Math.PI / 180),
                    // rfemur -19.059 7.94009 31.7107
                    // rtibia 42.1913
                    "rightUpperLegX": -19.059 * (Math.PI / 180),
                    "rightUpperLegY": 7.94009 * (Math.PI / 180),
                    "rightUpperLegZ": (-20 + 31.7107) * (Math.PI / 180),
                    "rightLowerLegX": 42.1913 * (Math.PI / 180),
                    // lfemur -10.761 13.1103 -7.74308
                    // ltibia 110.063
                    "leftUpperLegX": -10.761 * (Math.PI / 180),
                    "leftUpperLegY": 13.1103 * (Math.PI / 180),
                    "leftUpperLegZ": (-20 - 7.74308) * (Math.PI / 180),
                    "leftLowerLegX": 110.063 * (Math.PI / 180),
                    "rightFeetX": 0.1,
                    "leftFeetX": 0.1,
                    "rightHandY": 0.1,
                    "leftHandY": 0.1,
                    "rightHandX": 0.1,
                    "leftHandX": 0.1
                }

            },
            "3": {
                "0": {
                    "bodyX": 0.01,
                    "bodyY": 128,
                    "bodyZ": 0.01,
                    "bodyRX": 0.001,
                    "bodyRY": 0.001,
                    "bodyRZ": 0.001,
                    "upperBodyX": 0.1,
                    // rhumerus -50.3814 7.95753 -89.0702
                    // rradius 82.608
                    // lhumerus -18.1223 -17.4609 86.4164
                    // lradius 112.632
                    // 180 -30 -90   XYZ
                    "rightUpperArmX": (180 - 50.3814) * (Math.PI / 180),
                    "rightUpperArmY": (-30 + 7.95753) * (Math.PI / 180),
                    "rightUpperArmZ": (-90 - 89.0702) * (Math.PI / 180),
                    "rightLowerArmX": (180 + 82.608) * (Math.PI / 180),
                    "leftUpperArmX": (180 - 18.1223) * (Math.PI / 180),
                    "leftUpperArmY": (30 - 17.4609) * (Math.PI / 180),
                    "leftUpperArmZ": (90 + 86.4164) * (Math.PI / 180),
                    "leftLowerArmX": (180 + 112.632) * (Math.PI / 180),
                    // rfemur -30.2707 -3.8148 17.1005
                    // rtibia 103.785
                    "rightUpperLegX": -30.2707 * (Math.PI / 180),
                    "rightUpperLegY": -3.8148 * (Math.PI / 180),
                    "rightUpperLegZ": (-20 + 17.1005) * (Math.PI / 180),
                    "rightLowerLegX": 103.785 * (Math.PI / 180),
                    // lfemur -6.51187 -2.80483 -27.2091
                    // ltibia 36.5018
                    "leftUpperLegX": -6.51187 * (Math.PI / 180),
                    "leftUpperLegY": -2.80483 * (Math.PI / 180),
                    "leftUpperLegZ": (-27.2091) * (Math.PI / 180),
                    "leftLowerLegX": 36.5018 * (Math.PI / 180),
                    "rightFeetX": 0.1,
                    "leftFeetX": 0.1,
                    "rightHandY": 0.1,
                    "leftHandY": 0.1,
                    "rightHandX": 0.1,
                    "leftHandX": 0.1
                }

            }
        },
        "preset": "3",
        "closed": false,
        "folders": {}
    }
}