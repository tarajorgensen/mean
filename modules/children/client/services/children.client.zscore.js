'use strict';

var heightForAgeGirls = [
  { M: 49.1477, S: 0.0379 },
  { M: 53.6872, S: 0.0364 },
  { M: 57.0673, S: 0.03568 },
  { M: 59.8029, S: 0.0352 },
  { M: 62.0899, S: 0.03486 },
  { M: 64.0301, S: 0.03463 },
  { M: 65.7311, S: 0.03448 },
  { M: 67.2873, S: 0.03441 },
  { M: 68.7498, S: 0.0344 },
  { M: 70.1435, S: 0.03444 },
  { M: 71.4818, S: 0.03452 },
  { M: 72.771, S: 0.03464 },
  { M: 74.015, S: 0.03479 },
  { M: 75.2176, S: 0.03496 },
  { M: 76.3817, S: 0.03514 },
  { M: 77.5099, S: 0.03534 },
  { M: 78.6055, S: 0.03555 },
  { M: 79.671, S: 0.03576 },
  { M: 80.7079, S: 0.03598 },
  { M: 81.7182, S: 0.0362 },
  { M: 82.7036, S: 0.03643 },
  { M: 83.6654, S: 0.03666 },
  { M: 84.604, S: 0.03688 },
  { M: 85.5202, S: 0.03711 },
  { M: 86.4153, S: 0.03734 },
  { M: 86.5904, S: 0.03786 },
  { M: 87.4462, S: 0.03808 },
  { M: 88.283, S: 0.0383 },
  { M: 89.1004, S: 0.03851 },
  { M: 89.8991, S: 0.03872 },
  { M: 90.6797, S: 0.03893 },
  { M: 92.1906, S: 0.03933 },
  { M: 92.9239, S: 0.03952 },
  { M: 93.6444, S: 0.03971 },
  { M: 94.3533, S: 0.03989 },
  { M: 95.0515, S: 0.04006 },
  { M: 95.7399, S: 0.04024 },
  { M: 96.4187, S: 0.04041 },
  { M: 97.0885, S: 0.04057 },
  { M: 97.7493, S: 0.04073 },
  { M: 98.4015, S: 0.04089 },
  { M: 99.0448, S: 0.04105 },
  { M: 99.6795, S: 0.0412 },
  { M: 100.3058, S: 0.04135 },
  { M: 100.9238, S: 0.0415 },
  { M: 101.5337, S: 0.04164 },
  { M: 102.136, S: 0.04179 },
  { M: 102.7312, S: 0.04193 },
  { M: 103.3197, S: 0.04206 },
  { M: 103.9021, S: 0.0422 },
  { M: 104.4786, S: 0.04233 },
  { M: 105.0494, S: 0.04246 },
  { M: 105.6148, S: 0.04259 },
  { M: 106.1748, S: 0.04272 },
  { M: 106.7295, S: 0.04285 },
  { M: 107.2788, S: 0.04298 },
  { M: 107.8227, S: 0.0431 },
  { M: 108.3613, S: 0.04322 },
  { M: 108.8948, S: 0.04334 },
  { M: 109.4233, S: 0.04347 }
];
var heightForAgeBoys = [
  { M: 49.8842, S: 	0.03795 },
  { M: 54.7244, S: 	0.03557 },
  { M: 58.4249, S: 	0.03424 },
  { M: 61.4292, S: 	0.03328 },
  { M: 63.886, S: 	0.03257 },
  { M: 65.9026, S: 	0.03204 },
  { M: 67.6236, S: 	0.03165 },
  { M: 69.1645, S: 	0.03139 },
  { M: 70.5994, S: 	0.03124 },
  { M: 1.9687, S: 	0.03117 },
  { M: 73.2812, S: 	0.03118 },
  { M: 74.5388, S: 	0.03125 },
  { M: 75.7488, S: 	0.03137 },
  { M: 76.9186, S: 	0.03154 },
  { M: 78.0497, S: 	0.03174 },
  { M: 79.1458, S: 	0.03197 },
  { M: 80.2113, S: 	0.03222 },
  { M: 81.2487, S: 	0.0325 },
  { M: 82.2587, S: 	0.03279 },
  { M: 83.2418, S: 	0.0331 },
  { M: 84.1996, S: 	0.03342 },
  { M: 85.1348, S: 	0.03376 },
  { M: 86.0477, S: 	0.0341 },
  { M: 86.941, S: 	0.03445 },
  { M: 87.8161, S: 	0.03479 },
  { M: 87.972, S: 	0.03542 },
  { M: 88.8065, S: 	0.03576 },
  { M: 89.6197, S: 	0.0361 },
  { M: 90.412, S: 	0.03642 },
  { M: 91.1828, S: 	0.03674 },
  { M: 91.9327, S: 	0.03704 },
  { M: 92.6631, S: 	0.03733 },
  { M: 93.3753, S: 	0.03761 },
  { M: 94.0711, S: 	0.03787 },
  { M: 94.7532, S: 	0.03812 },
  { M: 95.4236, S: 	0.03836 },
  { M: 96.0835, S: 	0.03858 },
  { M: 96.7337, S: 	0.03879 },
  { M: 97.3749, S: 	0.039 },
  { M: 98.0073, S: 	0.03919 },
  { M: 98.631, S: 	0.03937 },
  { M: 99.2459, S: 	0.03954 },
  { M: 99.8515, S: 	0.03971 },
  { M: 100.4485, S: 0.03986 },
  { M: 101.0374, S: 0.04002 },
  { M: 101.6186, S: 0.04016 },
  { M: 102.1933, S: 0.04031 },
  { M: 102.7625, S: 0.04045 },
  { M: 103.3273, S: 0.04059 },
  { M: 103.8886, S: 0.04073 },
  { M: 104.4473, S: 0.04086 },
  { M: 105.0041, S: 0.041 },
  { M: 105.5596, S: 0.04113 },
  { M: 106.1138, S: 0.04126 },
  { M: 106.6668, S: 0.04139 },
  { M: 107.2188, S: 0.04152 },
  { M: 107.7697, S: 0.04165 },
  { M: 108.3198, S: 0.04177 },
  { M: 108.8689, S: 0.0419 },
  { M: 109.417, S: 0.04202 },
  { M: 109.9638, S: 0.04214 }
];

var weightForLengthGirls =[
  { y:45,	L:-0.3833, M:2.4607, S:0.09029 },
  { y:45.5,	L:-0.3833, M:2.5457, S:0.09033 },
  { y:46,	L:-0.3833, M:2.6306, S:0.09037 },
  { y:46.5,	L:-0.3833, M:2.7155, S:0.0904 },
  { y:47,	L:-0.3833, M:2.8007, S:0.09044 },
  { y:47.5,	L:-0.3833, M:2.8867, S:0.09048 },
  { y:48,	L:-0.3833, M:2.9741, S:0.09052 },
  { y:48.5,	L:-0.3833, M:3.0636, S:0.09056 },
  { y:49,	L:-0.3833	, M:3.156, S:0.0906 },
  { y:49.5,	L:-0.3833, M:3.252, S:0.09064 },
  { y:50,	L:-0.3833, M:3.3518, S:0.09068 },
  { y:50.5,	L:-0.3833, M:3.4557, S:0.09072 },
  { y:51,	L:-0.3833, M:3.5636, S:0.09076 },
  { y:51.5,	L:-0.3833, M:3.6754, S:0.0908 },
  { y:52,	L:-0.3833	, M:3.7911, S:0.09085 },
  { y:52.5,	L:-0.3833, M:3.9105, S:0.09089 },
  { y:53,	L:-0.3833, M:4.0332, S:0.09093 },
  { y:53.5,	L:-0.3833, M:4.1591, S:0.09098 },
  { y:54,	L:-0.3833, M:4.2875, S:0.09102 },
  { y:54.5,	L:-0.3833, M:4.4179, S:0.09106 },
  { y:55,	L:-0.3833, M:4.5498, S:0.0911 },
  { y:55.5,	L:-0.3833, M:4.6827, S:0.09114 },
  { y:56,	L:-0.3833, M:4.8162, S:0.09118 },
  { y:56.5,	L:-0.3833, M:4.95, S:0.09121 },
  { y:57,	L:-0.3833, M:5.0837, S:0.09125 },
  { y:57.5,	L:-0.3833, M:5.2173, S:0.09128 },
  { y:58,	L:-0.3833, M:5.3507, S:0.0913 },
  { y:58.5,	L:-0.3833, M:5.4834, S:0.09132 },
  { y:59,	L:-0.3833, M:5.6151, S:0.09134 },
  { y:59.5,	L:-0.3833, M:5.7454, S:0.09135 },
  { y:60,	L:-0.3833, M:5.8742, S:0.09136 },
  { y:60.5,	L:-0.3833, M:6.0014, S:0.09137 },
  { y:61,	L:-0.3833	, M:6.127, S:0.09137 },
  { y:61.5,	L:-0.3833, M:6.2511, S:0.09136 },
  { y:62,	L:-0.3833	, M:6.3738, S:0.09135 },
  { y:62.5,	L:-0.3833, M:6.4948, S:0.09133 },
  { y:63,	L:-0.3833	, M:6.6144, S:0.09131 },
  { y:63.5,	L:-0.3833, M:6.7328, S:0.09129 },
  { y:64,	L:-0.3833, M:6.8501, S:0.09126 },
  { y:64.5,	L:-0.3833, M:6.9662, S:0.09123 },
  { y:65,	L:-0.3833, M:7.0812, S:0.09119 },
  { y:65.5,	L:-0.3833, M:7.195, S:0.09115 },
  { y:66,	L:-0.3833, M:7.3076, S:0.0911 },
  { y:66.5,	L:-0.3833, M:7.4189, S:0.09106 },
  { y:67,	L:-0.3833, M:7.5288, S:0.09101 },
  { y:67.5,	L:-0.3833	, M:7.6375, S:0.09096 },
  { y:68,	L:-0.3833, M:7.7448, S:0.0909 },
  { y:68.5,	L:-0.3833	, M:7.8509, S:0.09085 },
  { y:69,	L:-0.3833, M:7.9559, S:0.09079 },
  { y:69.5,	L:-0.3833, M:8.0599, S:0.09074 },
  { y:70,	L:-0.3833, M:8.163, S:0.09068 },
  { y:70.5,	L:-0.3833, M:8.2651, S:0.09062 },
  { y:71,	L:-0.3833, M:8.3666, S:0.09056 },
  { y:71.5,	L:-0.3833, M:8.4676, S:0.0905 },
  { y:72,	L:-0.3833, M:8.5679, S:0.09043 },
  { y:72.5,	L:-0.3833, M:8.6674, S:0.09037 },
  { y:73,	L:-0.3833, M:8.7661, S:0.09031 },
  { y:73.5,	L:-0.3833, M:8.8638, S:0.09025 },
  { y:74,	L:-0.3833, M:8.9601, S:0.09018 },
  { y:74.5,	L:-0.3833, M:9.0552, S:0.09012 },
  { y:75,	L:-0.3833, M:9.149, S:0.09005 },
  { y:75.5,	L:-0.3833, M:9.2418, S:0.08999 },
  { y:76,	L:-0.3833, M:9.3337, S:0.08992 },
  { y:76.5,	L:-0.3833, M:9.4252, S:0.08985 },
  { y:77,	L:-0.3833, M:9.5166, S:0.08979 },
  { y:77.5,	L:-0.3833, M:9.6086, S:0.08972 },
  { y:78,	L:-0.3833, M:9.7015, S:0.08965 },
  { y:78.5,	L:-0.3833, M:9.7957, S:0.08959 },
  { y:79,	L:-0.3833, M:9.8915, S:0.08952 },
  { y:79.5,	L:-0.3833, M:9.9892, S:0.08946 },
  { y:80,	L:-0.3833	, M:10.0891, S:0.0894 },
  { y:80.5,	L:-0.3833	, M:10.1916, S:0.08934 },
  { y:81,	L:-0.3833, M:10.2965, S:0.08928 },
  { y:81.5,	L:-0.3833, M:10.4041, S:0.08923 },
  { y:82,	L:-0.3833	, M:10.514, S:0.08918 },
  { y:82.5,	L:-0.3833	, M:10.6263, S:0.08914 },
  { y:83,	L:-0.3833	, M:10.741, S:0.0891 },
  { y:83.5,	L:-0.3833, M:10.8578, S:0.08906 },
  { y:84,	L:-0.3833, M:10.9767, S:0.08903 },
  { y:84.5,	L:-0.3833, M:11.0974, S:0.089 },
  { y:85,	L:-0.3833, M:11.2198, S:0.08898 },
  { y:85.5,	L:-0.3833, M:11.3435, S:0.08897 },
  { y:86,	L:-0.3833, M:11.4684, S:0.08895 },
  { y:86.5,	L:-0.3833, M:11.594, S:0.08895 },
  { y:87,	L:-0.3833, M:11.7201, S:0.08895 },
  { y:87.5,	L:-0.3833, M:11.8461, S:0.08895 },
  { y:88,	L:-0.3833, M:11.972, S:0.08896 },
  { y:88.5,	L:-0.3833, M:12.0976, S:0.08898 },
  { y:89,	L:-0.3833, M:12.2229, S:0.089 },
  { y:89.5,	L:-0.3833, M:12.3477, S:0.08903 },
  { y:90,	L:-0.3833, M:12.4723, S:0.08906 },
  { y:90.5,	L:-0.3833, M:12.5965, S:0.08909 },
  { y:91,	L:-0.3833, M:12.7205, S:0.08913 },
  { y:91.5,	L:-0.3833, M:12.8443, S:0.08918 },
  { y:92,	L:-0.3833, M:12.9681, S:0.08923 },
  { y:92.5,	L:-0.3833, M:13.092, S:0.08928 },
  { y:93,	L:-0.3833, M:13.2158, S:0.08934 },
  { y:93.5,	L:-0.3833, M:13.3399, S:0.08941 },
  { y:94,	L:-0.3833, M:13.4643, S:0.08948 },
  { y:94.5,	L:-0.3833, M:13.5892, S:0.08955 },
  { y:95,	L:-0.3833, M:13.7146, S:0.08963 },
  { y:95.5,	L:-0.3833, M:13.8408, S:0.08972 },
  { y:96,	L:-0.3833, M:13.9676, S:0.08981 },
  { y:96.5,	L:-0.3833, M:14.0953, S:0.0899 },
  { y:97,	L:-0.3833, M:14.2239, S:0.09 },
  { y:97.5,	L:-0.3833, M:14.3537, S:0.0901 },
  { y:98,	L:-0.3833, M:14.4848, S:0.09021 },
  { y:98.5,	L:-0.3833, M:14.6174, S:0.09033 },
  { y:99,	L:-0.3833, M:14.7519, S:0.09044 },
  { y:99.5,	L:-0.3833, M:14.8882, S:0.09057 },
  { y:100	,	L:-0.3833, M:15.0267, S:0.09069 },
  { y:100.5,	L:-0.3833, M:15.1676, S:0.09083 },
  { y:101,	L:-0.3833, M:15.3108, S:0.09096 },
  { y:101.5, L:-0.3833, M:15.4564, S:0.0911 },
  { y:102,	L:-0.3833, M:15.6046, S:0.09125 },
  { y:102.5,	L:-0.3833, M:15.7553, S:0.09139 },
  { y:103,	L:-0.3833, M:15.9087, S:0.09155 },
  { y:103.5,	L:-0.3833, M:16.0645, S:0.0917 },
  { y:104,	L:-0.3833, M:16.2229, S:0.09186 },
  { y:104.5,	L:-0.3833, M:16.3837, S:0.09203 },
  { y:105,	L:-0.3833, M:16.547, S:0.09219 },
  { y:105.5,	L:-0.3833, M:16.7129, S:0.09236 },
  { y:106,	L:-0.3833, M:16.8814, S:0.09254 },
  { y:106.5,	L:-0.3833, M:17.0527, S:0.09271 },
  { y:107,	L:-0.3833, M:17.2269, S:0.09289 },
  { y:107.5,	L:-0.3833, M:17.4039, S:0.09307 },
  { y:108,	L:-0.3833, M:17.5839, S:0.09326 },
  { y:108.5,	L:-0.3833, M:17.7668, S:0.09344 },
  { y:109,	L:-0.3833, M:	17.9526, S:0.09363 },
  { y:109.5,	L:-0.3833, M:18.1412, S:0.09382 },
  { y:110,	L:-0.3833, M:18.3324, S:0.09401 }
];
var weightForLengthBoys = [
  { y:45,	L:-0.3521, M:2.441, S:0.09182 },
  { y:45.5,	L:-0.3521, M:2.5244, S:0.09153 },
  { y:46,	L:-0.3521, M:2.6077, S:0.09124 },
  { y:46.5,	L:-0.3521, M:2.6913, S:0.09094 },
  { y:47,	L:-0.3521, M:2.7755, S:0.09065 },
  { y:47.5,	L:-0.3521, M:2.8609, S:0.09036 },
  { y:48,	L:-0.3521, M:2.948, S:0.09007 },
  { y:48.5,	L:-0.3521, M:3.0377, S:0.08977 },
  { y:49,	L:-0.3521, M:3.1308, S:0.08948 },
  { y:49.5,	L:-0.3521, M:3.2276, S:0.08919 },
  { y:50,	L:-0.3521, M:3.3278, S:0.0889 },
  { y:50.5,	L:-0.3521, M:3.4311, S:0.08861 },
  { y:51,	L:-0.3521, M:3.5376, S:0.08831 },
  { y:51.5,	L:-0.3521, M:3.6477, S:0.08801 },
  { y:52,	L:-0.3521, M:3.762, S:0.08771 },
  { y:52.5,	L:-0.3521, M:3.8814, S:0.08741 },
  { y:53,	L:-0.3521, M:4.006, S:0.08711 },
  { y:53.5,	L:-0.3521, M:4.1354, S:0.08681 },
  { y:54,	L:-0.3521, M:4.2693, S:0.08651 },
  { y:54.5,	L:-0.3521, M:4.4066, S:0.08621 },
  { y:55,	L:-0.3521, M:4.5467, S:0.08592 },
  { y:55.5,	L:-0.3521, M:4.6892, S:0.08563 },
  { y:56,	L:-0.3521, M:4.8338, S:0.08535 },
  { y:56.5,	L:-0.3521, M:4.9796, S:0.08507 },
  { y:57,	L:-0.3521, M:5.1259, S:0.08481 },
  { y:57.5,	L:-0.3521, M:5.2721, S:0.08455 },
  { y:58,	L:-0.3521, M:5.418, S:0.0843 },
  { y:58.5,	L:-0.3521, M:5.5632, S:0.08406 },
  { y:59,	L:-0.3521, M:5.7074, S:0.08383 },
  { y:59.5,	L:-0.3521, M:5.8501, S:0.08362 },
  { y:60,	L:-0.3521, M:5.9907, S:0.08342 },
  { y:60.5,	L:-0.3521, M:6.1284, S:0.08324 },
  { y:61,	L:-0.3521, M:6.2632, S:0.08308 },
  { y:61.5,	L:-0.3521, M:6.3954, S:0.08292 },
  { y:62,	L:-0.3521, M:6.5251, S:0.08279 },
  { y:62.5,	L:-0.3521, M:6.6527, S:0.08266 },
  { y:63,	L:-0.3521, M:6.7786, S:0.08255 },
  { y:63.5,	L:-0.3521, M:6.9028, S:0.08245 },
  { y:64,	L:-0.3521, M:7.0255, S:0.08236 },
  { y:64.5,	L:-0.3521, M:7.1467, S:0.08229 },
  { y:65,	L:-0.3521, M:7.2666, S:0.08223 },
  { y:65.5,	L:-0.3521, M:7.3854, S:0.08218 },
  { y:66,	L:-0.3521, M:7.5034, S:0.08215 },
  { y:66.5,	L:-0.3521, M:7.6206, S:0.08213 },
  { y:67,	L:-0.3521, M:7.737, S:0.08212 },
  { y:67.5,	L:-0.3521, M:7.8526, S:0.08212 },
  { y:68,	L:-0.3521, M:7.9674, S:0.08214 },
  { y:68.5,	L:-0.3521, M:8.0816, S:0.08216 },
  { y:69,	L:-0.3521, M:8.1955, S:0.08219 },
  { y:69.5,	L:-0.3521, M:8.3092, S:0.08224 },
  { y:70,	L:-0.3521, M:8.4227, S:0.08229 },
  { y:70.5,	L:-0.3521, M:8.5358, S:0.08235 },
  { y:71,	L:-0.3521, M:8.648, S:0.08241 },
  { y:71.5,	L:-0.3521, M:8.7594, S:0.08248 },
  { y:72,	L:-0.3521, M:8.8697, S:0.08254 },
  { y:72.5,	L:-0.3521, M:8.9788, S:0.08262 },
  { y:73,	L:-0.3521, M:9.0865, S:0.08269 },
  { y:73.5,	L:-0.3521, M:9.1927, S:0.08276 },
  { y:74,	L:-0.3521, M:9.2974, S:0.08283 },
  { y:74.5,	L:-0.3521, M:9.401, S:0.08289 },
  { y:75,	L:-0.3521, M:9.5032, S:0.08295 },
  { y:75.5,	L:-0.3521, M:9.6041, S:0.08301 },
  { y:76,	L:-0.3521, M:9.7033, S:0.08307 },
  { y:76.5,	L:-0.3521, M:9.8007, S:0.08311 },
  { y:77,	L:-0.3521, M:9.8963, S:0.08314 },
  { y:77.5,	L:-0.3521, M:9.9902, S:0.08317 },
  { y:78,	L:-0.3521, M:10.0827, S:0.08318 },
  { y:78.5,	L:-0.3521, M:10.1741, S:0.08318 },
  { y:79,	L:-0.3521, M:10.2649, S:0.08316 },
  { y:79.5,	L:-0.3521, M:10.3558, S:0.08313 },
  { y:80,	L:-0.3521, M:10.4475, S:0.08308 },
  { y:80.5,	L:-0.3521, M:10.5405, S:0.08301 },
  { y:81,	L:-0.3521, M:10.6352, S:0.08293 },
  { y:81.5,	L:-0.3521, M:10.7322, S:0.08284 },
  { y:82,	L:-0.3521, M:10.8321, S:0.08273 },
  { y:82.5,	L:-0.3521, M:10.935, S:0.0826 },
  { y:83,	L:-0.3521, M:11.0415, S:0.08246 },
  { y:83.5,	L:-0.3521, M:1.1516, S:0.08231 },
  { y:84,	L:-0.3521, M:11.2651, S:0.08215 },
  { y:84.5,	L:-0.3521, M:11.3817, S:0.08198 },
  { y:85,	L:-0.3521, M:11.5007, S:0.08181 },
  { y:85.5,	L:-0.3521, M:11.6218, S:0.08163 },
  { y:86,	L:-0.3521, M:11.7444, S:0.08145 },
  { y:86.5,	L:-0.3521, M:11.8678, S:0.08128 },
  { y:87,	L:-0.3521, M:11.9916, S:0.08111 },
  { y:87.5,	L:-0.3521, M:12.1152, S:0.08096 },
  { y:88,	L:-0.3521, M:12.2382, S:0.08082 },
  { y:88.5,	L:-0.3521, M:12.3603, S:0.08069 },
  { y:89,	L:-0.3521, M:12.4815, S:0.08058 },
  { y:89.5,	L:-0.3521, M:12.6017, S:0.08048 },
  { y:90,	L:-0.3521, M:12.7209, S:0.08041 },
  { y:90.5,	L:-0.3521, M:12.8392, S:0.08034 },
  { y:91,	L:-0.3521, M:12.9569, S:0.0803 },
  { y:91.5,	L:-0.3521, M:13.0742, S:0.08026 },
  { y:92,	L:-0.3521, M:13.191, S:0.08025 },
  { y:92.5,	L:-0.3521, M:13.3075, S:0.08025 },
  { y:93,	L:-0.3521, M:13.4239, S:0.08026 },
  { y:93.5,	L:-0.3521, M:13.5404, S:0.08029 },
  { y:94,	L:-0.3521, M:13.6572, S:0.08034 },
  { y:94.5,	L:-0.3521, M:13.7746, S:0.0804 },
  { y:95,	L:-0.3521, M:13.8928, S:0.08047 },
  { y:95.5,	L:-0.3521, M:14.012, S:0.08056 },
  { y:96,	L:-0.3521, M:14.1325, S:0.08067 },
  { y:96.5,	L:-0.3521, M:14.2544, S:0.08078 },
  { y:97,	L:-0.3521, M:14.3782, S:0.08092 },
  { y:97.5,	L:-0.3521, M:14.5038, S:0.08106 },
  { y:98,	L:-0.3521, M:14.6316, S:0.08122 },
  { y:98.5,	L:-0.3521, M:14.7614, S:0.08139 },
  { y:99,	L:-0.3521, M:14.8934, S:0.08157 },
  { y:99.5,	L:-0.3521, M:15.0275, S:0.08177 },
  { y:100,	L:-0.3521, M:15.1637, S:0.08198 },
  { y:100.5,	L:-0.3521, M:15.3018, S:0.0822 },
  { y:101,	L:-0.3521, M:15.4419, S:0.08243 },
  { y:101.5,	L:-0.3521, M:15.5838, S:0.08267 },
  { y:102,	L:-0.3521, M:15.7276, S:0.08292 },
  { y:102.5,	L:-0.3521, M:15.8732, S:0.08317 },
  { y:103,	L:-0.3521, M:16.0206, S:0.08343 },
  { y:103.5,	L:-0.3521, M:16.1697, S:0.0837 },
  { y:104,	L:-0.3521, M:16.3204, S:0.08397 },
  { y:104.5,	L:-0.3521, M:16.4728, S:0.08425 },
  { y:105,	L:-0.3521, M:16.6268, S:0.08453 },
  { y:105.5,	L:-0.3521, M:16.7826, S:0.08481 },
  { y:106,	L:-0.3521, M:16.9401, S:0.0851 },
  { y:106.5,	L:-0.3521, M:17.0995, S:0.08539 },
  { y:107,	L:-0.3521, M:17.2607, S:0.08568 },
  { y:107.5,	L:-0.3521, M:17.4237, S:0.08599 },
  { y:108,	L:-0.3521, M:17.5885, S:0.08629 },
  { y:108.5,	L:-0.3521, M:17.7553, S:0.0866 },
  { y:109,	L:-0.3521, M:17.9242, S:0.08691 },
  { y:109.5,	L:-0.3521, M:18.0954, S:0.08723 },
  { y:110,	L:-0.3521, M:18.2689, S:0.08755 }
];
var weightForAgeGirls = [
  { L:0.3809,	M:3.2322, S:0.14171 },
  { L:0.1714,	M:4.1873, S:0.13724 },
  { L:0.0962,	M:5.1282, S:0.13 },
  { L:0.0402,	M:5.8458, S:0.12619 },
  { L:-0.005,	M:6.4237, S:0.12402 },
  { L:-0.043,	M:6.8985, S:0.12274 },
  { L:-0.0756, M:7.297, S:0.12204 },
  { L:-0.1039, M:7.6422, S:0.12178 },
  { L:-0.1288, M:7.9487, S:0.12181 },
  { L:-0.1507, M:8.2254, S:0.12199 },
  { L:-0.17, M:8.48, S:0.12223 },
  { L:-0.1872, M:8.7192, S:0.12247 },
  { L:-0.2024, M:8.9481, S:0.12268 },
  { L:-0.2158, M:9.1699, S:0.12283 },
  { L:-0.2278, M:9.387, S:0.12294 },
  { L:-0.2384, M:9.6008, S:0.12299 },
  { L:-0.2478, M:9.8124, S:0.12303 },
  { L:-0.2562, M:10.0226, S:0.12306 },
  { L:-0.2637, M:10.2315, S:0.12309 },
  { L:-0.2703, M:10.4393, S:0.12315 },
  { L:-0.2762, M:10.6464, S:0.12323 },
  { L:-0.2815, M:10.8534, S:0.12335 },
  { L:-0.2862, M:11.0608, S:0.1235 },
  { L:-0.2903, M:11.2688, S:0.12369 },
  { L:-0.2941, M:11.4775, S:0.1239 },
  { L:-0.2975, M:11.6864, S:0.12414 },
  { L:-0.3005, M:11.8947, S:0.12441 },
  { L:-0.3032, M:12.1015, S:0.12472 },
  { L:-0.3057, M:12.3059, S:0.12506 },
  { L:-0.308, M:12.5073, S:0.12545 },
  { L:-0.3101, M:12.7055, S:0.12587 },
  { L:-0.312, M:12.9006, S:0.12633 },
  { L:-0.3138, M:13.093, S:0.12683 },
  { L:-0.3155, M:13.2837, S:0.12737 },
  { L:-0.3171, M:13.4731, S:0.12794 },
  { L:-0.3186, M:13.6618, S:0.12855 },
  { L:-0.3201, M:13.8503, S:0.12919 },
  { L:-0.3216, M:14.0385, S:0.12988 },
  { L:-0.323, M:14.2265, S:0.13059 },
  { L:-0.3243, M:14.414, S:0.13135 },
  { L:-0.3257, M:14.601, S:0.13213 },
  { L:-0.327, M:14.7873, S:0.13293 },
  { L:-0.3283, M:14.9727, S:0.13376 },
  { L:-0.3296, M:15.1573, S:0.1346 },
  { L:-0.3309, M:15.341, S:0.13545 },
  { L:-0.3322, M:15.524, S:0.1363 },
  { L:-0.3335, M:15.7064, S:0.13716 },
  { L:-0.3348, M:15.8882, S:0.138 },
  { L:-0.3361, M:16.0697, S:0.13884 },
  { L:-0.3374, M:16.2511, S:0.13968 },
  { L:-0.3387, M:16.4322, S:0.14051 },
  { L:-0.34, M:16.6133, S:0.14132 },
  { L:-0.3414, M:16.7942, S:0.14213 },
  { L:-0.3427, M:16.9748, S:0.14293 },
  { L:-0.344, M:17.1551, S:0.14371 },
  { L:-0.3453, M:17.3347, S:0.14448 },
  { L:-0.3466, M:17.5136, S:0.14525 },
  { L:-0.3479, M:17.6916, S:0.146 },
  { L:-0.3492, M:17.8686, S:0.14675 },
  { L:-0.3505, M:18.0445, S:0.14748 },
  { L:-0.3518, M:18.2193, S:0.14821 }
];
var weightForAgeBoys = [
  { L:0.3487, M:3.3464, S:0.14602 },
  { L:0.2297, M:4.4709, S:0.13395 },
  { L:0.197, M:5.5675, S:0.12385 },
  { L:0.1738, M:6.3762, S:0.11727 },
  { L:0.1553, M:7.0023, S:0.11316 },
  { L:0.1395, M:7.5105, S:0.1108 },
  { L:0.1257, M:7.934, S:0.10958 },
  { L:0.1134, M:8.297, S:0.10902 },
  { L:0.1021, M:8.6151, S:0.10882 },
  { L:0.0917, M:8.9014, S:0.10881 },
  { L:0.082, M:9.1649, S:0.10891 },
  { L:0.073, M:9.4122, S:0.10906 },
  { L:0.0644, M:9.6479, S:0.10925 },
  { L:0.0563, M:9.8749, S:0.10949 },
  { L:0.0487, M:10.0953, S:0.10976 },
  { L:0.0413, M:10.3108, S:0.11007 },
  { L:0.0343, M:10.5228, S:0.11041 },
  { L:0.0275, M:10.7319, S:0.11079 },
  { L:0.0211, M:10.9385, S:0.11119 },
  { L:0.0148, M:11.143, S:0.11164 },
  { L:0.0087, M:11.3462, S:0.11211 },
  { L:0.0029, M:11.5486, S:0.11261 },
  { L:-0.0028, M:11.7504, S:0.11314 },
  { L:-0.0083, M:11.9514, S:0.11369 },
  { L:-0.0137, M:12.1515, S:0.11426 },
  { L:-0.0189, M:12.3502, S:0.11485 },
  { L:-0.024, M:12.5466, S:0.11544 },
  { L:-0.0289, M:12.7401, S:0.11604 },
  { L:-0.0337, M:12.9303, S:0.11664 },
  { L:-0.0385, M:13.1169, S:0.11723 },
  { L:-0.0431, M:13.3, S:0.11781 },
  { L:0.0476, M:13.4798, S:0.11839 },
  { L:-0.052, M:13.6567, S:0.11896 },
  { L:-0.0564, M:13.8309, S:0.11953 },
  { L:-0.0606, M:14.0031, S:0.12008 },
  { L:-0.0648, M:14.1736, S:0.12062 },
  { L:-0.0689, M:14.3429, S:0.12116 },
  { L:-0.0729, M:14.5113, S:0.12168 },
  { L:-0.0769, M:14.6791, S:0.1222 },
  { L:-0.0808, M:14.8466, S:0.12271 },
  { L:-0.0846, M:15.014, S:0.12322 },
  { L:-0.0883, M:15.1813, S:0.12373 },
  { L:-0.092, M:15.3486, S:0.12425 },
  { L:-0.0957, M:15.5158, S:0.12478 },
  { L:-0.0993, M:15.6828, S:0.12531 },
  { L:-0.1028, M:15.8497, S:0.12586 },
  { L:-0.1063, M:16.0163, S:0.12643 },
  { L:-0.1097, M:16.1827, S:0.127 },
  { L:-0.1131, M:16.3489, S:0.12759 },
  { L:-0.1165, M:16.515, S:0.12819 },
  { L:-0.1198, M:16.6811, S:0.1288 },
  { L:-0.123, M:16.8471, S:0.12943 },
  { L:-0.1262, M:17.0132, S:0.13005 },
  { L:-0.1294, M:17.1792, S:0.13069 },
  { L:-0.1325, M:17.3452, S:0.13133 },
  { L:-0.1356, M:17.5111, S:0.13197 },
  { L:-0.1387, M:17.6768, S:0.13261 },
  { L:-0.1417, M:17.8422, S:0.13325 },
  { L:-0.1447, M:18.0073, S:0.13389 },
  { L:-0.1477, M:18.1722, S:0.13453 },
  { L:-0.1506, M:18.3366, S:0.13517 }
];
angular.module('children').factory('ZScores', ['$log', function (console) {
  console.log('in ZScores service');
  var getMethod = function(sex, age, height, weight) {
    var ha = heightForAgeGirls[age];
    var wa = weightForAgeGirls[age];
    var wl = null;
    for (var i = 0; i < weightForLengthGirls.length; i++) {
      if (weightForLengthGirls[i].y === height){
        wl = weightForLengthGirls[i];
        break;
      }
    }
    var heightForAge = (height - ha.M)/(ha.M * ha.S);
    var weightForAge = (Math.pow(weight/wa.M,wa.L)-1)/(wa.S*wa.L);
    var weightForLength = (Math.pow(wl.y/wl.M,wl.L)-1)/(wl.S*wl.L);
    return heightForAge;
  };
  return { getMethod: getMethod };
}]);
