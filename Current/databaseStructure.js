database: {
  users: {
    Uid: {
      username: '',
      might: '',
      platform: '',
    },
  },
  userProfiles: {
    userUid: {
      social: {},
      progress: {
        dungeons: '',
        hbm: '',
        guild: '',
        lava: false,
        lbf: 1,
        shards: 1,
      },
      heroes: [],
    }
  }

  guilds: {
    uid: {
      name: '',
      recruiting: false,
      platform: '',
    }
  },
  guildProfiles: {
    guildUid: {
      social: {},
      requirements: {
        might: '',
        minScore: '',
        shards: {
          required: false,
          frequency: '',
          donation: '',
        },
        torchRequired: false,
      },
      info: {
        leaders: [],
        bosses: [
          randomKey1: {
            name: 'boss3'
            time: 10000,
          },
          randomKey2: {
            name: 'boss5'
            time: 20000,
          }
        ]
        ffTime: '',
        maxTorches: [],
        // Communication is to be decided.
        communcation: [],
      },
      moreInfo: '',
    }
  }

  platforms: {
    amazon: {
      name: '',
      img: '',
    },
    android: {
      name: '',
      img: '',
    },
    apple: {
      name: '',
      img: '',
    }
    windows: {
      name: '',
      img: '',
    },
  },

  heroes: {
    anubis: {
      name: 'Anubis',
      skillImg: 'url',
      // maxLevel is set on front-end unlike talents
    }
  },

  talents: {
    slowDown: {
      name: 'Slow Down',
      talentImg: 'url',
      maxLevel: 8,
    }
  },

  evolution: {
    none: {
      name: 'not evolved',
      img: 'url',
    }
  },

  equipments: {
    energySap: {
      name: 'Energy Sap',
      img: 'url',
      // maxLevel is set on front-end unlike talents
    }
  }

  hbm: ['AE'],

  // Dungeons to be decided
  dungeons: {
    ordinary: {},
    expert: {},
    insane: {},
  },
}
