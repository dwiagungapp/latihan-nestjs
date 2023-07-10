'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' : 'data-bs-target="#xs-controllers-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' :
                                            'id="xs-controllers-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' : 'data-bs-target="#xs-injectables-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' :
                                        'id="xs-injectables-links-module-AppModule-acfcb04832315c9fbd3da02040dd91f6098815ae62f34e36031108b2993a3edd2924c3ef026a1e6f2ac79a7b8b6fbb4af13cba009200f6354825fac6efe35dc8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' :
                                            'id="xs-controllers-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' :
                                        'id="xs-injectables-links-module-AuthModule-18cfba667d911125bb4b5c8bfe7967e0d7eb7b6f326f63a96bc981976d4dbaa40c91f9b9df4a33f3f48eb80797b47a0c18d7949f35ad79e8d91d41966ab62aaa"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                            'id="xs-controllers-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' :
                                        'id="xs-injectables-links-module-LatihanModule-249fa5030598b3f45f164f187ba323a1f097f0f56f335da933b16e75e4bc197dbb1b96aa7117f178bef5b4e6babc5fbbf5145987484adf2357c9cf639afec1e9"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-6d2242309af574383ef9863c721858e95bfe5a2a6d8647f71dbfe86fb06c84d969ebbc4f104c9258f3408049d392c855a1f1fc97248a0176b9c4fcb51f52df95"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-6d2242309af574383ef9863c721858e95bfe5a2a6d8647f71dbfe86fb06c84d969ebbc4f104c9258f3408049d392c855a1f1fc97248a0176b9c4fcb51f52df95"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-6d2242309af574383ef9863c721858e95bfe5a2a6d8647f71dbfe86fb06c84d969ebbc4f104c9258f3408049d392c855a1f1fc97248a0176b9c4fcb51f52df95"' :
                                        'id="xs-injectables-links-module-PrismaModule-6d2242309af574383ef9863c721858e95bfe5a2a6d8647f71dbfe86fb06c84d969ebbc4f104c9258f3408049d392c855a1f1fc97248a0176b9c4fcb51f52df95"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' :
                                            'id="xs-controllers-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' :
                                        'id="xs-injectables-links-module-SchoolModule-ce74e11e449cde40803ffa686aa4bf2b2514e061a831834f09640137d29248136876630038ddc446f6714d849b5e94799462f5b022a6f3f358a3394f46242bc6"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' :
                                            'id="xs-controllers-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' :
                                        'id="xs-injectables-links-module-TaskModule-d88a82b1bec292ff53e0f4508301bc992ae44160de89cecf8655d2d596def8c59dc60b933a34c8cec448153ba8a8476aa6f41a9fe9bec46fcd511545a5d51510"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LatihanController.html" data-type="entity-link" >LatihanController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatihanService.html" data-type="entity-link" >LatihanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});