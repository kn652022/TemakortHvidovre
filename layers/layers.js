ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1375717.746912, 7476171.360071, 1399548.553504, 7493360.794334]);
var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Kommuneplan_1 = new ol.format.GeoJSON();
var features_Kommuneplan_1 = format_Kommuneplan_1.readFeatures(json_Kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_1.addFeatures(features_Kommuneplan_1);
var lyr_Kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_1, 
                style: style_Kommuneplan_1,
                popuplayertitle: 'Kommuneplan',
                interactive: false,
                title: '<img src="styles/legend/Kommuneplan_1.png" /> Kommuneplan'
            });
var format_LokalplanforslagHvidovrekommune_2 = new ol.format.GeoJSON();
var features_LokalplanforslagHvidovrekommune_2 = format_LokalplanforslagHvidovrekommune_2.readFeatures(json_LokalplanforslagHvidovrekommune_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokalplanforslagHvidovrekommune_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokalplanforslagHvidovrekommune_2.addFeatures(features_LokalplanforslagHvidovrekommune_2);
var lyr_LokalplanforslagHvidovrekommune_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokalplanforslagHvidovrekommune_2, 
                style: style_LokalplanforslagHvidovrekommune_2,
                popuplayertitle: 'Lokalplan forslag Hvidovre kommune',
                interactive: true,
    title: 'Lokalplan forslag Hvidovre kommune<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_2_0.png" /> Boligområde ved Planteheldvej og Femagervej<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_2_1.png" /> for blandet byområde ved Svend Aagesens Alle 10<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_2_2.png" /> for sportshal ved Risbjergskolen<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_2_3.png" /> <br />' });
var format_LokalplanHvidovre_3 = new ol.format.GeoJSON();
var features_LokalplanHvidovre_3 = format_LokalplanHvidovre_3.readFeatures(json_LokalplanHvidovre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokalplanHvidovre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokalplanHvidovre_3.addFeatures(features_LokalplanHvidovre_3);
var lyr_LokalplanHvidovre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokalplanHvidovre_3, 
                style: style_LokalplanHvidovre_3,
                popuplayertitle: 'Lokalplan Hvidovre',
                interactive: true,
    title: 'Lokalplan Hvidovre<br />\
    <img src="styles/legend/LokalplanHvidovre_3_0.png" /> 001<br />\
    <img src="styles/legend/LokalplanHvidovre_3_1.png" /> 101-1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_2.png" /> 102<br />\
    <img src="styles/legend/LokalplanHvidovre_3_3.png" /> 103<br />\
    <img src="styles/legend/LokalplanHvidovre_3_4.png" /> 104<br />\
    <img src="styles/legend/LokalplanHvidovre_3_5.png" /> 105<br />\
    <img src="styles/legend/LokalplanHvidovre_3_6.png" /> 106<br />\
    <img src="styles/legend/LokalplanHvidovre_3_7.png" /> 108<br />\
    <img src="styles/legend/LokalplanHvidovre_3_8.png" /> 109-1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_9.png" /> 112<br />\
    <img src="styles/legend/LokalplanHvidovre_3_10.png" /> 115<br />\
    <img src="styles/legend/LokalplanHvidovre_3_11.png" /> 116<br />\
    <img src="styles/legend/LokalplanHvidovre_3_12.png" /> 118<br />\
    <img src="styles/legend/LokalplanHvidovre_3_13.png" /> 119<br />\
    <img src="styles/legend/LokalplanHvidovre_3_14.png" /> 120<br />\
    <img src="styles/legend/LokalplanHvidovre_3_15.png" /> 121<br />\
    <img src="styles/legend/LokalplanHvidovre_3_16.png" /> 122<br />\
    <img src="styles/legend/LokalplanHvidovre_3_17.png" /> 124<br />\
    <img src="styles/legend/LokalplanHvidovre_3_18.png" /> 126<br />\
    <img src="styles/legend/LokalplanHvidovre_3_19.png" /> 127<br />\
    <img src="styles/legend/LokalplanHvidovre_3_20.png" /> 128<br />\
    <img src="styles/legend/LokalplanHvidovre_3_21.png" /> 131<br />\
    <img src="styles/legend/LokalplanHvidovre_3_22.png" /> 132<br />\
    <img src="styles/legend/LokalplanHvidovre_3_23.png" /> 133<br />\
    <img src="styles/legend/LokalplanHvidovre_3_24.png" /> 134<br />\
    <img src="styles/legend/LokalplanHvidovre_3_25.png" /> 135<br />\
    <img src="styles/legend/LokalplanHvidovre_3_26.png" /> 137<br />\
    <img src="styles/legend/LokalplanHvidovre_3_27.png" /> 139<br />\
    <img src="styles/legend/LokalplanHvidovre_3_28.png" /> 140<br />\
    <img src="styles/legend/LokalplanHvidovre_3_29.png" /> 141<br />\
    <img src="styles/legend/LokalplanHvidovre_3_30.png" /> 142<br />\
    <img src="styles/legend/LokalplanHvidovre_3_31.png" /> 143<br />\
    <img src="styles/legend/LokalplanHvidovre_3_32.png" /> 144<br />\
    <img src="styles/legend/LokalplanHvidovre_3_33.png" /> 147<br />\
    <img src="styles/legend/LokalplanHvidovre_3_34.png" /> 148<br />\
    <img src="styles/legend/LokalplanHvidovre_3_35.png" /> 149<br />\
    <img src="styles/legend/LokalplanHvidovre_3_36.png" /> 150<br />\
    <img src="styles/legend/LokalplanHvidovre_3_37.png" /> 151<br />\
    <img src="styles/legend/LokalplanHvidovre_3_38.png" /> 152<br />\
    <img src="styles/legend/LokalplanHvidovre_3_39.png" /> 154<br />\
    <img src="styles/legend/LokalplanHvidovre_3_40.png" /> 202<br />\
    <img src="styles/legend/LokalplanHvidovre_3_41.png" /> 203<br />\
    <img src="styles/legend/LokalplanHvidovre_3_42.png" /> 206<br />\
    <img src="styles/legend/LokalplanHvidovre_3_43.png" /> 207<br />\
    <img src="styles/legend/LokalplanHvidovre_3_44.png" /> 208<br />\
    <img src="styles/legend/LokalplanHvidovre_3_45.png" /> 209<br />\
    <img src="styles/legend/LokalplanHvidovre_3_46.png" /> 210<br />\
    <img src="styles/legend/LokalplanHvidovre_3_47.png" /> 211<br />\
    <img src="styles/legend/LokalplanHvidovre_3_48.png" /> 216<br />\
    <img src="styles/legend/LokalplanHvidovre_3_49.png" /> 220<br />\
    <img src="styles/legend/LokalplanHvidovre_3_50.png" /> 221<br />\
    <img src="styles/legend/LokalplanHvidovre_3_51.png" /> 225<br />\
    <img src="styles/legend/LokalplanHvidovre_3_52.png" /> 226<br />\
    <img src="styles/legend/LokalplanHvidovre_3_53.png" /> 228<br />\
    <img src="styles/legend/LokalplanHvidovre_3_54.png" /> 229<br />\
    <img src="styles/legend/LokalplanHvidovre_3_55.png" /> 230<br />\
    <img src="styles/legend/LokalplanHvidovre_3_56.png" /> 231<br />\
    <img src="styles/legend/LokalplanHvidovre_3_57.png" /> 232<br />\
    <img src="styles/legend/LokalplanHvidovre_3_58.png" /> 233<br />\
    <img src="styles/legend/LokalplanHvidovre_3_59.png" /> 234<br />\
    <img src="styles/legend/LokalplanHvidovre_3_60.png" /> 236<br />\
    <img src="styles/legend/LokalplanHvidovre_3_61.png" /> 237<br />\
    <img src="styles/legend/LokalplanHvidovre_3_62.png" /> 238<br />\
    <img src="styles/legend/LokalplanHvidovre_3_63.png" /> 239<br />\
    <img src="styles/legend/LokalplanHvidovre_3_64.png" /> 240<br />\
    <img src="styles/legend/LokalplanHvidovre_3_65.png" /> 241<br />\
    <img src="styles/legend/LokalplanHvidovre_3_66.png" /> 301-1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_67.png" /> 303<br />\
    <img src="styles/legend/LokalplanHvidovre_3_68.png" /> 304<br />\
    <img src="styles/legend/LokalplanHvidovre_3_69.png" /> 305<br />\
    <img src="styles/legend/LokalplanHvidovre_3_70.png" /> 306<br />\
    <img src="styles/legend/LokalplanHvidovre_3_71.png" /> 313<br />\
    <img src="styles/legend/LokalplanHvidovre_3_72.png" /> 314<br />\
    <img src="styles/legend/LokalplanHvidovre_3_73.png" /> 316<br />\
    <img src="styles/legend/LokalplanHvidovre_3_74.png" /> 322<br />\
    <img src="styles/legend/LokalplanHvidovre_3_75.png" /> 323<br />\
    <img src="styles/legend/LokalplanHvidovre_3_76.png" /> 324<br />\
    <img src="styles/legend/LokalplanHvidovre_3_77.png" /> 325<br />\
    <img src="styles/legend/LokalplanHvidovre_3_78.png" /> 326<br />\
    <img src="styles/legend/LokalplanHvidovre_3_79.png" /> 327<br />\
    <img src="styles/legend/LokalplanHvidovre_3_80.png" /> 328<br />\
    <img src="styles/legend/LokalplanHvidovre_3_81.png" /> 329<br />\
    <img src="styles/legend/LokalplanHvidovre_3_82.png" /> 330<br />\
    <img src="styles/legend/LokalplanHvidovre_3_83.png" /> 331<br />\
    <img src="styles/legend/LokalplanHvidovre_3_84.png" /> 332<br />\
    <img src="styles/legend/LokalplanHvidovre_3_85.png" /> 335<br />\
    <img src="styles/legend/LokalplanHvidovre_3_86.png" /> 338<br />\
    <img src="styles/legend/LokalplanHvidovre_3_87.png" /> 339<br />\
    <img src="styles/legend/LokalplanHvidovre_3_88.png" /> 340<br />\
    <img src="styles/legend/LokalplanHvidovre_3_89.png" /> 341<br />\
    <img src="styles/legend/LokalplanHvidovre_3_90.png" /> 342<br />\
    <img src="styles/legend/LokalplanHvidovre_3_91.png" /> 343<br />\
    <img src="styles/legend/LokalplanHvidovre_3_92.png" /> 345<br />\
    <img src="styles/legend/LokalplanHvidovre_3_93.png" /> 403-1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_94.png" /> 404<br />\
    <img src="styles/legend/LokalplanHvidovre_3_95.png" /> 405<br />\
    <img src="styles/legend/LokalplanHvidovre_3_96.png" /> 407<br />\
    <img src="styles/legend/LokalplanHvidovre_3_97.png" /> 408<br />\
    <img src="styles/legend/LokalplanHvidovre_3_98.png" /> 409<br />\
    <img src="styles/legend/LokalplanHvidovre_3_99.png" /> 411<br />\
    <img src="styles/legend/LokalplanHvidovre_3_100.png" /> 412<br />\
    <img src="styles/legend/LokalplanHvidovre_3_101.png" /> 418<br />\
    <img src="styles/legend/LokalplanHvidovre_3_102.png" /> 423<br />\
    <img src="styles/legend/LokalplanHvidovre_3_103.png" /> 429<br />\
    <img src="styles/legend/LokalplanHvidovre_3_104.png" /> 432<br />\
    <img src="styles/legend/LokalplanHvidovre_3_105.png" /> 433<br />\
    <img src="styles/legend/LokalplanHvidovre_3_106.png" /> 440<br />\
    <img src="styles/legend/LokalplanHvidovre_3_107.png" /> 441<br />\
    <img src="styles/legend/LokalplanHvidovre_3_108.png" /> 447<br />\
    <img src="styles/legend/LokalplanHvidovre_3_109.png" /> 448<br />\
    <img src="styles/legend/LokalplanHvidovre_3_110.png" /> 452<br />\
    <img src="styles/legend/LokalplanHvidovre_3_111.png" /> 454<br />\
    <img src="styles/legend/LokalplanHvidovre_3_112.png" /> 455<br />\
    <img src="styles/legend/LokalplanHvidovre_3_113.png" /> 456<br />\
    <img src="styles/legend/LokalplanHvidovre_3_114.png" /> 457<br />\
    <img src="styles/legend/LokalplanHvidovre_3_115.png" /> 458<br />\
    <img src="styles/legend/LokalplanHvidovre_3_116.png" /> 459<br />\
    <img src="styles/legend/LokalplanHvidovre_3_117.png" /> 462<br />\
    <img src="styles/legend/LokalplanHvidovre_3_118.png" /> 463<br />\
    <img src="styles/legend/LokalplanHvidovre_3_119.png" /> 464<br />\
    <img src="styles/legend/LokalplanHvidovre_3_120.png" /> 466<br />\
    <img src="styles/legend/LokalplanHvidovre_3_121.png" /> 467<br />\
    <img src="styles/legend/LokalplanHvidovre_3_122.png" /> 468<br />\
    <img src="styles/legend/LokalplanHvidovre_3_123.png" /> 469<br />\
    <img src="styles/legend/LokalplanHvidovre_3_124.png" /> 470<br />\
    <img src="styles/legend/LokalplanHvidovre_3_125.png" /> 471<br />\
    <img src="styles/legend/LokalplanHvidovre_3_126.png" /> 472<br />\
    <img src="styles/legend/LokalplanHvidovre_3_127.png" /> 473<br />\
    <img src="styles/legend/LokalplanHvidovre_3_128.png" /> 475<br />\
    <img src="styles/legend/LokalplanHvidovre_3_129.png" /> 476<br />\
    <img src="styles/legend/LokalplanHvidovre_3_130.png" /> 504<br />\
    <img src="styles/legend/LokalplanHvidovre_3_131.png" /> 507<br />\
    <img src="styles/legend/LokalplanHvidovre_3_132.png" /> 508<br />\
    <img src="styles/legend/LokalplanHvidovre_3_133.png" /> 510<br />\
    <img src="styles/legend/LokalplanHvidovre_3_134.png" /> 511<br />\
    <img src="styles/legend/LokalplanHvidovre_3_135.png" /> 516<br />\
    <img src="styles/legend/LokalplanHvidovre_3_136.png" /> 518<br />\
    <img src="styles/legend/LokalplanHvidovre_3_137.png" /> 519<br />\
    <img src="styles/legend/LokalplanHvidovre_3_138.png" /> A1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_139.png" /> A10<br />\
    <img src="styles/legend/LokalplanHvidovre_3_140.png" /> A11<br />\
    <img src="styles/legend/LokalplanHvidovre_3_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/LokalplanHvidovre_3_143.png" /> A13<br />\
    <img src="styles/legend/LokalplanHvidovre_3_144.png" /> A14<br />\
    <img src="styles/legend/LokalplanHvidovre_3_145.png" /> A15<br />\
    <img src="styles/legend/LokalplanHvidovre_3_146.png" /> A3<br />\
    <img src="styles/legend/LokalplanHvidovre_3_147.png" /> A5<br />\
    <img src="styles/legend/LokalplanHvidovre_3_148.png" /> A7<br />\
    <img src="styles/legend/LokalplanHvidovre_3_149.png" /> A8<br />\
    <img src="styles/legend/LokalplanHvidovre_3_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_151.png" /> B17<br />\
    <img src="styles/legend/LokalplanHvidovre_3_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/LokalplanHvidovre_3_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/LokalplanHvidovre_3_155.png" /> H10<br />\
    <img src="styles/legend/LokalplanHvidovre_3_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_157.png" /> H11<br />\
    <img src="styles/legend/LokalplanHvidovre_3_158.png" /> H12<br />\
    <img src="styles/legend/LokalplanHvidovre_3_159.png" /> H13<br />\
    <img src="styles/legend/LokalplanHvidovre_3_160.png" /> H14<br />\
    <img src="styles/legend/LokalplanHvidovre_3_161.png" /> H15<br />\
    <img src="styles/legend/LokalplanHvidovre_3_162.png" /> H16<br />\
    <img src="styles/legend/LokalplanHvidovre_3_163.png" /> H17<br />\
    <img src="styles/legend/LokalplanHvidovre_3_164.png" /> H18<br />\
    <img src="styles/legend/LokalplanHvidovre_3_165.png" /> H20<br />\
    <img src="styles/legend/LokalplanHvidovre_3_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_167.png" /> H3<br />\
    <img src="styles/legend/LokalplanHvidovre_3_168.png" /> H4<br />\
    <img src="styles/legend/LokalplanHvidovre_3_169.png" /> H5<br />\
    <img src="styles/legend/LokalplanHvidovre_3_170.png" /> H9<br />\
    <img src="styles/legend/LokalplanHvidovre_3_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/LokalplanHvidovre_3_172.png" /> <br />' });
var format_frededeomrder_4 = new ol.format.GeoJSON();
var features_frededeomrder_4 = format_frededeomrder_4.readFeatures(json_frededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_4.addFeatures(features_frededeomrder_4);
var lyr_frededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_4, 
                style: style_frededeomrder_4,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_4_5.png" /> <br />' });
var format_Folkeskoler_5 = new ol.format.GeoJSON();
var features_Folkeskoler_5 = format_Folkeskoler_5.readFeatures(json_Folkeskoler_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_5.addFeatures(features_Folkeskoler_5);
var lyr_Folkeskoler_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_5, 
                style: style_Folkeskoler_5,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_5.png" /> Folkeskoler'
            });
var format_Togstationer_6 = new ol.format.GeoJSON();
var features_Togstationer_6 = format_Togstationer_6.readFeatures(json_Togstationer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_6.addFeatures(features_Togstationer_6);
var lyr_Togstationer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_6, 
                style: style_Togstationer_6,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_6.png" /> Togstationer'
            });
var format_SupermarkederNetto_7 = new ol.format.GeoJSON();
var features_SupermarkederNetto_7 = format_SupermarkederNetto_7.readFeatures(json_SupermarkederNetto_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederNetto_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederNetto_7.addFeatures(features_SupermarkederNetto_7);
var lyr_SupermarkederNetto_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederNetto_7, 
                style: style_SupermarkederNetto_7,
                popuplayertitle: 'Supermarkeder — Netto',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederNetto_7.png" /> Supermarkeder — Netto'
            });
var format_SupermarkederLidl_8 = new ol.format.GeoJSON();
var features_SupermarkederLidl_8 = format_SupermarkederLidl_8.readFeatures(json_SupermarkederLidl_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederLidl_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederLidl_8.addFeatures(features_SupermarkederLidl_8);
var lyr_SupermarkederLidl_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederLidl_8, 
                style: style_SupermarkederLidl_8,
                popuplayertitle: 'Supermarkeder — Lidl',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederLidl_8.png" /> Supermarkeder — Lidl'
            });
var format_SupermarkederKvickley_9 = new ol.format.GeoJSON();
var features_SupermarkederKvickley_9 = format_SupermarkederKvickley_9.readFeatures(json_SupermarkederKvickley_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederKvickley_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederKvickley_9.addFeatures(features_SupermarkederKvickley_9);
var lyr_SupermarkederKvickley_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederKvickley_9, 
                style: style_SupermarkederKvickley_9,
                popuplayertitle: 'Supermarkeder — Kvickley',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederKvickley_9.png" /> Supermarkeder — Kvickley'
            });
var format_SupermarkederFtex_10 = new ol.format.GeoJSON();
var features_SupermarkederFtex_10 = format_SupermarkederFtex_10.readFeatures(json_SupermarkederFtex_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederFtex_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederFtex_10.addFeatures(features_SupermarkederFtex_10);
var lyr_SupermarkederFtex_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederFtex_10, 
                style: style_SupermarkederFtex_10,
                popuplayertitle: 'Supermarkeder — Føtex',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederFtex_10.png" /> Supermarkeder — Føtex'
            });
var format_Supermarkeder365Discount_11 = new ol.format.GeoJSON();
var features_Supermarkeder365Discount_11 = format_Supermarkeder365Discount_11.readFeatures(json_Supermarkeder365Discount_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder365Discount_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder365Discount_11.addFeatures(features_Supermarkeder365Discount_11);
var lyr_Supermarkeder365Discount_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder365Discount_11, 
                style: style_Supermarkeder365Discount_11,
                popuplayertitle: 'Supermarkeder — 365Discount',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder365Discount_11.png" /> Supermarkeder — 365Discount'
            });
var format_Ladestationer_12 = new ol.format.GeoJSON();
var features_Ladestationer_12 = format_Ladestationer_12.readFeatures(json_Ladestationer_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladestationer_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladestationer_12.addFeatures(features_Ladestationer_12);
var lyr_Ladestationer_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladestationer_12, 
                style: style_Ladestationer_12,
                popuplayertitle: 'Ladestationer',
                interactive: true,
                title: '<img src="styles/legend/Ladestationer_12.png" /> Ladestationer'
            });
var format_Mosque_13 = new ol.format.GeoJSON();
var features_Mosque_13 = format_Mosque_13.readFeatures(json_Mosque_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_13.addFeatures(features_Mosque_13);
var lyr_Mosque_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_13, 
                style: style_Mosque_13,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_13.png" /> Mosque'
            });
var format_Kirker_14 = new ol.format.GeoJSON();
var features_Kirker_14 = format_Kirker_14.readFeatures(json_Kirker_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_14.addFeatures(features_Kirker_14);
var lyr_Kirker_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_14, 
                style: style_Kirker_14,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_14.png" /> Kirker'
            });
var format_Lgehuse_15 = new ol.format.GeoJSON();
var features_Lgehuse_15 = format_Lgehuse_15.readFeatures(json_Lgehuse_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehuse_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehuse_15.addFeatures(features_Lgehuse_15);
var lyr_Lgehuse_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehuse_15, 
                style: style_Lgehuse_15,
                popuplayertitle: 'Lægehuse',
                interactive: true,
                title: '<img src="styles/legend/Lgehuse_15.png" /> Lægehuse'
            });
var format_Lystbdehavn_16 = new ol.format.GeoJSON();
var features_Lystbdehavn_16 = format_Lystbdehavn_16.readFeatures(json_Lystbdehavn_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lystbdehavn_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lystbdehavn_16.addFeatures(features_Lystbdehavn_16);
var lyr_Lystbdehavn_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lystbdehavn_16, 
                style: style_Lystbdehavn_16,
                popuplayertitle: 'Lystbådehavn',
                interactive: true,
                title: '<img src="styles/legend/Lystbdehavn_16.png" /> Lystbådehavn'
            });
var format_Sportsfaciliteter_17 = new ol.format.GeoJSON();
var features_Sportsfaciliteter_17 = format_Sportsfaciliteter_17.readFeatures(json_Sportsfaciliteter_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter_17.addFeatures(features_Sportsfaciliteter_17);
var lyr_Sportsfaciliteter_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter_17, 
                style: style_Sportsfaciliteter_17,
                popuplayertitle: 'Sports faciliteter',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter_17.png" /> Sports faciliteter'
            });
var format_Sportsfaciliteter2_18 = new ol.format.GeoJSON();
var features_Sportsfaciliteter2_18 = format_Sportsfaciliteter2_18.readFeatures(json_Sportsfaciliteter2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter2_18.addFeatures(features_Sportsfaciliteter2_18);
var lyr_Sportsfaciliteter2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter2_18, 
                style: style_Sportsfaciliteter2_18,
                popuplayertitle: 'Sports faciliteter 2',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter2_18.png" /> Sports faciliteter 2'
            });
var format_Brnehaver_19 = new ol.format.GeoJSON();
var features_Brnehaver_19 = format_Brnehaver_19.readFeatures(json_Brnehaver_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_19.addFeatures(features_Brnehaver_19);
var lyr_Brnehaver_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_19, 
                style: style_Brnehaver_19,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_19.png" /> Børnehaver'
            });
var format_Legepladser_20 = new ol.format.GeoJSON();
var features_Legepladser_20 = format_Legepladser_20.readFeatures(json_Legepladser_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legepladser_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legepladser_20.addFeatures(features_Legepladser_20);
var lyr_Legepladser_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legepladser_20, 
                style: style_Legepladser_20,
                popuplayertitle: 'Legepladser',
                interactive: true,
                title: '<img src="styles/legend/Legepladser_20.png" /> Legepladser'
            });
var format_HvidovreHospital_21 = new ol.format.GeoJSON();
var features_HvidovreHospital_21 = format_HvidovreHospital_21.readFeatures(json_HvidovreHospital_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreHospital_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreHospital_21.addFeatures(features_HvidovreHospital_21);
var lyr_HvidovreHospital_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreHospital_21, 
                style: style_HvidovreHospital_21,
                popuplayertitle: 'Hvidovre Hospital',
                interactive: true,
                title: '<img src="styles/legend/HvidovreHospital_21.png" /> Hvidovre Hospital'
            });
var format_OffentligtWC_22 = new ol.format.GeoJSON();
var features_OffentligtWC_22 = format_OffentligtWC_22.readFeatures(json_OffentligtWC_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffentligtWC_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OffentligtWC_22.addFeatures(features_OffentligtWC_22);
var lyr_OffentligtWC_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OffentligtWC_22, 
                style: style_OffentligtWC_22,
                popuplayertitle: 'Offentligt WC',
                interactive: true,
                title: '<img src="styles/legend/OffentligtWC_22.png" /> Offentligt WC'
            });
var group_Supermarkeder = new ol.layer.Group({
                                layers: [lyr_SupermarkederNetto_7,lyr_SupermarkederLidl_8,lyr_SupermarkederKvickley_9,lyr_SupermarkederFtex_10,lyr_Supermarkeder365Discount_11,],
                                fold: 'close',
                                title: 'Supermarkeder'});

lyr_Positronnolabelsretina_0.setVisible(true);lyr_Kommuneplan_1.setVisible(true);lyr_LokalplanforslagHvidovrekommune_2.setVisible(true);lyr_LokalplanHvidovre_3.setVisible(true);lyr_frededeomrder_4.setVisible(true);lyr_Folkeskoler_5.setVisible(true);lyr_Togstationer_6.setVisible(true);lyr_SupermarkederNetto_7.setVisible(true);lyr_SupermarkederLidl_8.setVisible(true);lyr_SupermarkederKvickley_9.setVisible(true);lyr_SupermarkederFtex_10.setVisible(true);lyr_Supermarkeder365Discount_11.setVisible(true);lyr_Ladestationer_12.setVisible(true);lyr_Mosque_13.setVisible(true);lyr_Kirker_14.setVisible(true);lyr_Lgehuse_15.setVisible(true);lyr_Lystbdehavn_16.setVisible(true);lyr_Sportsfaciliteter_17.setVisible(true);lyr_Sportsfaciliteter2_18.setVisible(true);lyr_Brnehaver_19.setVisible(true);lyr_Legepladser_20.setVisible(true);lyr_HvidovreHospital_21.setVisible(true);lyr_OffentligtWC_22.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_Kommuneplan_1,lyr_LokalplanforslagHvidovrekommune_2,lyr_LokalplanHvidovre_3,lyr_frededeomrder_4,lyr_Folkeskoler_5,lyr_Togstationer_6,group_Supermarkeder,lyr_Ladestationer_12,lyr_Mosque_13,lyr_Kirker_14,lyr_Lgehuse_15,lyr_Lystbdehavn_16,lyr_Sportsfaciliteter_17,lyr_Sportsfaciliteter2_18,lyr_Brnehaver_19,lyr_Legepladser_20,lyr_HvidovreHospital_21,lyr_OffentligtWC_22];
lyr_Kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_LokalplanforslagHvidovrekommune_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_LokalplanHvidovre_3.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_frededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Folkeskoler_5.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederNetto_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederLidl_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederKvickley_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederFtex_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Supermarkeder365Discount_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ladestationer_12.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Leverandø': 'Leverandø', 'Lukketid': 'Lukketid', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Mosque_13.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kirker_14.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lgehuse_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lystbdehavn_16.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportsfaciliteter_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Website': 'Website', });
lyr_Sportsfaciliteter2_18.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Brnehaver_19.set('fieldAliases', {'fid': 'fid', 'Instutionn': 'Instutionn', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Legepladser_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovreHospital_21.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OffentligtWC_22.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_LokalplanforslagHvidovrekommune_2.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_LokalplanHvidovre_3.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_frededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Folkeskoler_5.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_6.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_SupermarkederNetto_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SupermarkederLidl_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SupermarkederKvickley_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SupermarkederFtex_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Supermarkeder365Discount_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ladestationer_12.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Leverandø': 'TextEdit', 'Lukketid': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Mosque_13.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Kirker_14.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Lgehuse_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lystbdehavn_16.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Sportsfaciliteter_17.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Website': 'TextEdit', });
lyr_Sportsfaciliteter2_18.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Brnehaver_19.set('fieldImages', {'fid': '', 'Instutionn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Legepladser_20.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovreHospital_21.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_OffentligtWC_22.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kommuneplan_1.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'id': 'hidden field', 'planid': 'inline label - always visible', 'objektkode': 'hidden field', 'komnr': 'hidden field', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datoforsl': 'hidden field', 'datovedt': 'inline label - always visible', 'datoaflyst': 'hidden field', 'datoikraft': 'hidden field', 'datoslut': 'hidden field', 'aktuel': 'hidden field', 'datooprt': 'hidden field', 'datoopdt': 'hidden field', 'status': 'hidden field', 'datostart': 'hidden field', 'glkomnr': 'hidden field', 'kommunenavn': 'hidden field', 'glkomnavn': 'hidden field', 'glkomnavn_besk': 'hidden field', });
lyr_LokalplanforslagHvidovrekommune_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_LokalplanHvidovre_3.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_frededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Folkeskoler_5.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Togstationer_6.set('fieldLabels', {'Name': 'no label', });
lyr_SupermarkederNetto_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederLidl_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederKvickley_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederFtex_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Supermarkeder365Discount_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ladestationer_12.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Leverandø': 'no label', 'Lukketid': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Mosque_13.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Kirker_14.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Lgehuse_15.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lystbdehavn_16.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Sportsfaciliteter_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'Website': 'no label', });
lyr_Sportsfaciliteter2_18.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Brnehaver_19.set('fieldLabels', {'fid': 'no label', 'Instutionn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_Legepladser_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HvidovreHospital_21.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_OffentligtWC_22.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_OffentligtWC_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});