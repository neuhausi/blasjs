/* This is a conversion from BLAS to Typescript/Javascript
Copyright (C) 2018  Jacob K.F. Bogers  info@mail.jacob-bogers.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

import { complex } from '../../../test-helpers';

import { matrix_mxn } from '../../../matrices';

export const fixture = {
    //SUBROUTINE ZSYMM(SIDE,UPLO,M,N,ALPHA,A,LDA,B,LDB,BETA,C,LDC)
    csymm: {
        case0: {
            desc: '(trivial) alpha=(0,0), beta=(1,0)',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0, 0),
                beta: complex(1, 0),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: matrix_mxn(6, 6).toArr(),
            },
        },
        case1: {
            desc: '(near trivial) alpha=(0,0), beta=(0,0)',
            input: {
                cmdx: 'logDebug',
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0, 0),
                beta: complex(0, 0),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    for (let i = 1; i <= 5; i++) {
                        m.setCol(i, 1, 4, 0);
                    }
                    return m.toArr();
                })(),
            },
        },
        case2: {
            desc: '(near trivial) alpha=(0,0), beta=(0,0.5)',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0, 0),
                beta: complex(0, 0.5),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-0.4960801899433136, 0.63147711753845215),
                    complex(0.2147565484046936, -0.16311667859554291),
                    complex(-0.61915206909179688, 0.66489964723587036),
                    complex(0.1396731436252594, 0.63621467351913452),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(0.2263919860124588, -0.4642835259437561),
                    complex(0.41602164506912231, -0.14736022055149078),
                    complex(0.58328527212142944, -2.8835863340646029e-3),
                    complex(0.53279531002044678, 1.2023266553878784),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(-0.41602355241775513, -0.57382851839065552),
                    complex(0.11366434395313263, -0.14473079144954681),
                    complex(-0.13306868076324463, -0.14960755407810211),
                    complex(0.18835136294364929, -0.20575541257858276),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(2.7438737452030182e-2, 0.21784165501594543),
                    complex(-0.12507066130638123, -0.61876922845840454),
                    complex(-0.30912163853645325, -0.1121339425444603),
                    complex(8.6311750113964081e-2, 0.18869782984256744),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(-0.17936444282531738, -2.8553387150168419e-2),
                    complex(5.5227391421794891e-3, 0.25180399417877197),
                    complex(0.47032457590103149, 0.5428847074508667),
                    complex(5.7912662625312805e-2, -0.34547692537307739),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
        case3: {
            desc: 'side="l", uplo="u", alpha=(0.2,0.8), beta=(0,0)',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0, 0),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-2.2968014924921123, -0.5293634823620974),
                    complex(0.35489687384414803, -2.292737853453044),
                    complex(-1.3783587245064326, -2.3059544968549628),
                    complex(-0.72898874442339034, 0.59368436499219035),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(0.10739761644651513, 0.94204795064473434),
                    complex(-3.4566256523152337, -1.6187282448880311),
                    complex(-1.3483694069194099, 1.8418290113239979),
                    complex(0.11753648309305997, 1.3217121569037471),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(-8.4138573879255246e-2, -1.838010731960906),
                    complex(9.0552436543457765e-2, 1.75316352835339),
                    complex(1.886081218057146, 0.37916577798682471),
                    complex(-0.32629307536500785, -0.22190535570622069),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(0.59382620653175278, 1.3518102090396353),
                    complex(-0.80675541202414347, 0.1379792096132908),
                    complex(-0.55234254898652901, 4.0660390058228246e-2),
                    complex(1.1469169235729075, 0.93424402758150493),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(-2.0535297393515086, -0.90738799511552626),
                    complex(0.66440011969325696, 0.18560436104215738),
                    complex(0.27518635188501162, -0.26361336171321681),
                    complex(-1.1191619149239813, -0.20332913599157931),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
        case4: {
            desc: 'side="l", uplo="u", alpha=(0.2,0.8), beta=(-0.45,0.2)',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(-0.45, 0.2),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-3.0635629621553253, -0.72324479070432846),
                    complex(0.58760450133305819, -2.1647036374194832),
                    complex(-2.2244292224934261, -2.5972314814183854),
                    complex(-1.2457126771394509, 0.97387606412464534),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(0.61580957448089868, 0.9600873195134938),
                    complex(-3.1575927968249022, -1.3032528633434817),
                    complex(-1.1124600669622788, 2.3656323077758663),
                    complex(-0.75143935090644309, 2.2821585925408958),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(0.26589765554440115, -2.4419633299946581),
                    complex(0.2662758836561443, 1.7975691177587587),
                    complex(1.9675005400620669, 0.1995609459495378),
                    complex(-6.5772662649753344e-2, -0.13469129980541369),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(0.40874421735551142, 1.4636417353970876),
                    complex(-0.29989138643221913, -0.22209207765204922),
                    complex(-0.57507066062708612, -0.28240265494069994),
                    complex(1.0116135817735474, 1.0874037336879938),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(-2.099577469796345, -1.0802373444121891),
                    complex(0.43998562662562701, 0.29129642531082411),
                    complex(-2.5280038713622777e-2, 0.37683263160049152),
                    complex(-0.78506762492971194, -0.28939851321797716),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
        case5: {
            desc: 'side="l", uplo="l", alpha=(0.2,0.8), beta=(0,0)',
            input: {
                side: 'l',
                uplo: 'l',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0, 0),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-3.8333497901901694, 2.9206721297073388),
                    complex(4.0337134933481513, 2.3506737863282625),
                    complex(-2.5892107980300336, -0.54660776934073463),
                    complex(1.0875583705347331, 0.57236987683953822),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(4.3877885507785717, 1.6351682799134268),
                    complex(3.817256474396153, 1.41636787973184),
                    complex(0.67416915126009014, -2.4820886098673176),
                    complex(1.3474196179958526, -2.5611815252913859),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(-0.51064199014805089, -2.9616433883062907),
                    complex(-0.41777799829000256, -0.27874915275343692),
                    complex(-0.69482630794178268, -2.1840826741234074),
                    complex(-1.2911708889627647, -1.5158614406578568),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(-0.72898874442339034, 0.59368436499219035),
                    complex(0.18860989731474426, 1.528092023700151),
                    complex(-1.1486684282513933, 0.82139850865391395),
                    complex(-1.4892507275872222, -1.1002656652229008),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(-3.8367821023613968e-2, 0.94462773309408787),
                    complex(0.47468822156721668, -2.5610852567248483),
                    complex(-0.63176315928510762, -0.15637152773359697),
                    complex(5.8696244842979695e-2, 0.10846525402097236),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
        case6: {
            desc: 'side="l", uplo="l", alpha=(0.2,0.8), beta=(0.2,-0.3)',
            input: {
                side: 'l',
                uplo: 'l',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.2, -0.3),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-3.2831108136174301, 2.7402179230628736),
                    complex(3.8396128867746722, 2.3626411767326667),
                    complex(-1.951759678955761, -0.69788674220754709),
                    complex(1.258240354229299, 0.13477179927689709),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(4.0662399406286429, 1.8231816107946774),
                    complex(3.5086993883370194, 1.3383753550687447),
                    complex(0.32304453952981449, -2.7136725703233515),
                    complex(1.5086730886023312, -3.4956956743737004),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(-0.4905592595551701, -2.4509368401439637),
                    complex(-0.54386892481433269, -0.23737641269180321),
                    complex(-0.67482811883420268, -2.0410906650111751),
                    complex(-1.4864838774774316, -1.4677487345052371),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(-0.65831532424398331, 0.45200387164451361),
                    complex(1.6144602008976106e-2, 1.9493818407958337),
                    complex(-1.0080490154456416, 1.0123275341111615),
                    complex(-1.4655586466516795, -1.2480090681873917),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(5.7829493917699204e-2, 1.0335055442641772),
                    complex(0.57209617712261418, -2.7143767549253766),
                    complex(-0.69680402982294654, -0.67023219831126257),
                    complex(-0.11424212632138736, 0.29258635208631906),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
        case7: {
            desc: 'side="r", uplo="u", alpha=(0.2,0.8), beta=(0,0)',
            input: {
                side: 'r',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0, 0),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-0.68789145940302987, 1.8329511695677019),
                    complex(-0.35809168245188361, -1.0636083744696306e-2),
                    complex(-3.2593764899338589, 1.0372370209678747),
                    complex(-0.41238007275876321, 0.26500281030402489),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(-4.0166250214634658e-3, -0.72614159015953206),
                    complex(-0.17916625616086776, 1.1137145475848402),
                    complex(2.0080915542539346, -1.2131710860970963),
                    complex(0.50624436468776812, -3.2230829658515958),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(-0.69495237809229937, -1.3354370915785085),
                    complex(0.91614440470384206, 0.99016837101678445),
                    complex(1.3961115316961736, -2.7623140474023393),
                    complex(-2.1084023282426259, -1.8357926337335364),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(0.80302837210733169, 1.3683664988160076),
                    complex(-0.76497292858919685, 5.4819963486339163e-2),
                    complex(-1.9658998675312542, 0.50146731557823421),
                    complex(-1.5244983117274997, -0.69705230310299404),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(-1.6489611913313786, -0.69767481020573352),
                    complex(0.66985596056305741, -0.4096388490753039),
                    complex(-0.75833799382131772, -1.9739152075580129),
                    complex(-0.35217871501270248, 0.88540810150424742),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
        case8: {
            desc: 'side="r", uplo="u", alpha=(0.2,0.8), beta=(0,0)',
            input: {
                side: 'r',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.1, 0.9),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-1.4545403522564087, 3.068825990492837),
                    complex(-4.1532417690594847e-3, -0.34719740775962737),
                    complex(-4.240870253346892, 2.3578867699511319),
                    complex(-3.3725484293536417e-2, 1.3822545631600767),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(0.31063223243332727, -1.607130312596722),
                    complex(0.54020064057662853, 0.76526182736517412),
                    complex(3.0574282989838917, -1.3350185975235238),
                    complex(1.7057412319797005, -1.1654541070767599),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(-1.5585604579949832, -2.2851236855960146),
                    complex(1.0917940596783018, 0.70692008417952956),
                    complex(1.1266664014060568, -3.0049939010598545),
                    complex(-1.8105209670542655, -2.2438226397138634),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(0.89598642986501287, 1.7549937198850301),
                    complex(-1.1138539605126059, -1.0339504855995572),
                    complex(-2.5447455909998791, 0.36145055297371376),
                    complex(-1.3313975991071523, -0.37465856866420832),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(-1.9775278573793162, -0.7131980166148939),
                    complex(0.73015769034182454, 4.250378059464055e-2),
                    complex(0.19682316348181128, -1.0907876766150957),
                    complex(-0.31703131115284733, 0.2519671196086759),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
        case9: {
            desc: 'side="r", uplo="l", alpha=(0.2,0.8), beta=(0.1,0.9)',
            input: {
                side: 'r',
                uplo: 'l',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.1, 0.9),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                a: (() => {
                    const m = matrix_mxn(6, 6);
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                b: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
                c: (() => {
                    const m = matrix_mxn(6, 6); //m*
                    //m.r[0] = 0;
                    //m.i[0] = 0;
                    return m;
                })(),
            },
            expect: {
                c: [
                    complex(-3.2329928277905804, 0.19275090419455865),
                    complex(-0.30416433267163456, -1.5550639420612633),
                    complex(-5.232582537547227, 3.4164800029642555),
                    complex(2.4597600096686323, 1.3707797248053202),
                    complex(0.41464143991470337, 1.7579030990600586),
                    complex(-1.5399500131607056, 0.56074607372283936),
                    complex(-0.11913555484672778, 1.2631038170995079),
                    complex(-1.7255743084372139, -2.5329001340582855),
                    complex(1.608763517511254, -1.180619737504738),
                    complex(1.8770284039924505, -0.2815154835472426),
                    complex(0.76359343528747559, -1.5637820959091187),
                    complex(-0.79900926351547241, 1.1565370559692383),
                    complex(-3.651058207301709, -1.1369642620765816),
                    complex(-0.58113546142178552, -6.5411612935301233e-2),
                    complex(-4.2247059440545929, 2.266209598069417),
                    complex(3.1795104002170413, -0.36973704442330557),
                    complex(0.25222346186637878, 2.4413645267486572),
                    complex(-0.89192110300064087, -0.79533910751342773),
                    complex(-0.51045670906194318, 1.3021703259561368),
                    complex(1.3578335576483098, -3.6219231345450065),
                    complex(2.3247922324626504, -1.6484619774679632),
                    complex(4.6965465984792782, 4.2780600065100467),
                    complex(0.13333636522293091, -2.223900318145752),
                    complex(0.80418950319290161, -1.2636144161224365),
                    complex(-1.0641815567849253, -3.7897173043656944),
                    complex(-0.6368870296364495, 4.0720985901679052e-2),
                    complex(-1.8124927384357186, -2.6712802397442732),
                    complex(3.4904477306612107, 0.59713014768198525),
                    complex(-1.2845993041992188, -0.81496870517730713),
                    complex(4.6726170927286148e-2, 0.24226348102092743),
                    complex(-0.23570655286312103, -1.4250984191894531),
                    complex(-0.54288828372955322, 0.36594113707542419),
                    complex(-0.43331032991409302, 0.24841265380382538),
                    complex(-0.64947164058685303, 6.5288178622722626e-2),
                    complex(0.72675073146820068, 1.9156390801072121e-2),
                    complex(1.151911735534668, 0.25733837485313416),
                ],
            },
        },
    },
    csymmErrors: {
        case0: {
            desc: 'a has no imaginary part',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [0],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
        case1: {
            desc: 'b has no imaginary part',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [0],
                c: [complex(0, 0)],
            },
        },
        case2: {
            desc: 'c has no imaginary part',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [0],
            },
        },
        case3: {
            desc: 'uplo!="ul"',
            input: {
                side: 'l',
                uplo: 'x',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
        case4: {
            desc: 'side!="lr"',
            input: {
                side: 'x',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
        case5: {
            desc: 'n<0',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: -5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
        case6: {
            desc: 'm<0',
            input: {
                side: 'l',
                uplo: 'u',
                m: -4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
        case7: {
            desc: 'lda < max(1, nrowA)',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 3, //physical storage
                ldb: 6, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
        case8: {
            desc: 'ldb < max(1, m)',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 3, // physical storage
                ldc: 6, // physical storage
                //dummies, its not a data test
                //dummies, its not a data test
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
        case9: {
            desc: 'ldc < max(1, m)',
            input: {
                side: 'l',
                uplo: 'u',
                m: 4,
                n: 5,
                alpha: complex(0.2, 0.8),
                beta: complex(0.3, -0.7),
                lda: 6, //physical storage
                ldb: 6, // physical storage
                ldc: 3, // physical storage
                a: [complex(0, 0)],
                b: [complex(0, 0)],
                c: [complex(0, 0)],
            },
        },
    },
};
