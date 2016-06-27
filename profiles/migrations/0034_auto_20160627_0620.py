# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0033_merge'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilemore',
            name='annual_income',
            field=models.PositiveSmallIntegerField(verbose_name='annual_income', blank=True, null=True, choices=[('', 'annual_income'), (1, '< €15k'), (2, '€15k - €30k'), (3, '€30k - €40k'), (4, '€40k - €50k'), (5, '€50k - €80k'), (6, '> €80k'), (7, 'no answer')]),
        ),
        migrations.AlterField(
            model_name='profilemore',
            name='country_of_birth',
            field=models.PositiveSmallIntegerField(verbose_name='country of birth', blank=True, null=True, choices=[('', 'Country of birth'), (1, 'Afghanistan'), (2, 'Aland Islands'), (3, 'Albania'), (4, 'Algeria'), (5, 'American Samoa'), (6, 'Andorra'), (7, 'Angola'), (8, 'Anguilla'), (9, 'Antigua'), (10, 'Argentina'), (11, 'Armenia'), (12, 'Aruba'), (13, 'Australia'), (14, 'Austria'), (15, 'Azerbaijan'), (16, 'Bahamas'), (17, 'Bahrain'), (18, 'Bangladesh'), (19, 'Barbados'), (20, 'Belarus'), (21, 'Belgium'), (22, 'Belize'), (23, 'Benin'), (24, 'Bermuda'), (25, 'Bhutan'), (26, 'Bolivia'), (27, 'Bosnia'), (28, 'Botswana'), (29, 'Bouvet Island'), (30, 'Brazil'), (31, 'British Virgin Islands'), (32, 'Brunei'), (33, 'Bulgaria'), (34, 'Burkina Faso'), (35, 'Burma'), (36, 'Burundi'), (37, 'Caicos Islands'), (38, 'Cambodia'), (39, 'Cameroon'), (40, 'Canada'), (41, 'Cape Verde'), (42, 'Cayman Islands'), (43, 'Central African Republic'), (44, 'Chad'), (45, 'Chile'), (46, 'China'), (47, 'Christmas Island'), (48, 'Cocos Islands'), (49, 'Colombia'), (50, 'Comoros'), (51, 'Congo Brazzaville'), (52, 'Congo'), (53, 'Cook Islands'), (54, 'Costa Rica'), (55, 'Cote Divoire'), (56, 'Croatia'), (57, 'Cuba'), (58, 'Cyprus'), (59, 'Czech Republic'), (60, 'Denmark'), (61, 'Djibouti'), (62, 'Dominica'), (63, 'Dominican Republic'), (64, 'Ecuador'), (65, 'Egypt'), (66, 'El Salvador'), (67, 'England'), (68, 'Equatorial Guinea'), (69, 'Eritrea'), (70, 'Estonia'), (71, 'Ethiopia'), (72, 'European Union'), (73, 'Falkland Islands'), (74, 'Faroe Islands'), (75, 'Fiji'), (76, 'Finland'), (77, 'France'), (78, 'French Guiana'), (79, 'French Polynesia'), (80, 'French Territories'), (81, 'Gabon'), (82, 'Gambia'), (83, 'Georgia'), (84, 'Germany'), (85, 'Ghana'), (86, 'Gibraltar'), (87, 'Greece'), (88, 'Greenland'), (89, 'Grenada'), (90, 'Guadeloupe'), (91, 'Guam'), (92, 'Guatemala'), (93, 'Guinea-Bissau'), (94, 'Guinea'), (95, 'Guyana'), (96, 'Haiti'), (97, 'Heard Island'), (98, 'Honduras'), (99, 'Hong Kong'), (100, 'Hungary'), (101, 'Iceland'), (102, 'India'), (103, 'Indian Ocean Territory'), (104, 'Indonesia'), (105, 'Iran'), (106, 'Iraq'), (107, 'Ireland'), (108, 'Israel'), (109, 'Italy'), (110, 'Jamaica'), (111, 'Japan'), (112, 'Jordan'), (113, 'Kazakhstan'), (114, 'Kenya'), (115, 'Kiribati'), (116, 'Kuwait'), (117, 'Kyrgyzstan'), (118, 'Laos'), (119, 'Latvia'), (120, 'Lebanon'), (121, 'Lesotho'), (122, 'Liberia'), (123, 'Libya'), (124, 'Liechtenstein'), (125, 'Lithuania'), (126, 'Luxembourg'), (127, 'Macau'), (128, 'Macedonia'), (129, 'Madagascar'), (130, 'Malawi'), (131, 'Malaysia'), (132, 'Maldives'), (133, 'Mali'), (134, 'Malta'), (135, 'Marshall Islands'), (136, 'Martinique'), (137, 'Mauritania'), (138, 'Mauritius'), (139, 'Mayotte'), (140, 'Mexico'), (141, 'Micronesia'), (142, 'Moldova'), (143, 'Monaco'), (144, 'Mongolia'), (145, 'Montenegro'), (146, 'Montserrat'), (147, 'Morocco'), (148, 'Mozambique'), (149, 'Namibia'), (150, 'Nauru'), (151, 'Nepal'), (152, 'Netherlands Antilles'), (153, 'Netherlands'), (154, 'New Caledonia'), (155, 'New Guinea'), (156, 'New Zealand'), (157, 'Nicaragua'), (158, 'Niger'), (159, 'Nigeria'), (160, 'Niue'), (161, 'Norfolk Island'), (162, 'North Korea'), (163, 'Northern Mariana Islands'), (164, 'Norway'), (165, 'Oman'), (166, 'Pakistan'), (167, 'Palau'), (168, 'Palestine'), (169, 'Panama'), (170, 'Paraguay'), (171, 'Peru'), (172, 'Philippines'), (173, 'Pitcairn Islands'), (174, 'Poland'), (175, 'Portugal'), (176, 'Puerto Rico'), (177, 'Qatar'), (178, 'Reunion'), (179, 'Romania'), (180, 'Russia'), (181, 'Rwanda'), (182, 'Saint Helena'), (183, 'Saint Kitts and Nevis'), (184, 'Saint Lucia'), (185, 'Saint Pierre'), (186, 'Saint Vincent'), (187, 'Samoa'), (188, 'San Marino'), (189, 'Sandwich Islands'), (190, 'Sao Tome'), (191, 'Saudi Arabia'), (192, 'Senegal'), (193, 'Serbia'), (194, 'Serbia'), (195, 'Seychelles'), (196, 'Sierra Leone'), (197, 'Singapore'), (198, 'Slovakia'), (199, 'Slovenia'), (200, 'Solomon Islands'), (201, 'Somalia'), (202, 'South Africa'), (203, 'South Korea'), (204, 'Spain'), (205, 'Sri Lanka'), (206, 'Sudan'), (207, 'Suriname'), (208, 'Svalbard'), (209, 'Swaziland'), (210, 'Sweden'), (211, 'Switzerland'), (212, 'Syria'), (213, 'Taiwan'), (214, 'Tajikistan'), (215, 'Tanzania'), (216, 'Thailand'), (217, 'Timorleste'), (218, 'Togo'), (219, 'Tokelau'), (220, 'Tonga'), (221, 'Trinidad'), (222, 'Tunisia'), (223, 'Turkey'), (224, 'Turkmenistan'), (225, 'Tuvalu'), (226, 'Uganda'), (227, 'Ukraine'), (228, 'United Arab Emirates'), (229, 'United States'), (230, 'Uruguay'), (231, 'Us Minor Islands'), (232, 'Us Virgin Islands'), (233, 'Uzbekistan'), (234, 'Vanuatu'), (235, 'Vatican City'), (236, 'Venezuela'), (237, 'Vietnam'), (238, 'Wallis and Futuna'), (239, 'Western Sahara'), (240, 'Yemen'), (241, 'Zambia'), (242, 'Zimbabwe')]),
        ),
    ]
