#include QMK_KEYBOARD_H

enum {
    TD_Q_ESC,
};

tap_dance_action_t tap_dance_actions[] = {
    [TD_Q_ESC] = ACTION_TAP_DANCE_DOUBLE(KC_Q, KC_ESC)  
};

enum combos {
    SPCTAB_LOCK,
    ENTBSPC_LOCK,
    FJ_CAPS
};

const uint16_t PROGMEM spctab_combo[] = {LT(1,KC_SPC), LT(2,KC_TAB), COMBO_END};
const uint16_t PROGMEM entbspc_combo[] = {LT(3,KC_ENT), LT(4, KC_BSPC), COMBO_END};
const uint16_t PROGREM fjcaps_combo[] = {LSFT_T(KC_F), RSFT_T(KC_J), COMBO_END};

combo_t key_combos[] = {
    [SPCTAB_LOCK] = COMBO(spctab_combo, QK_LLCK),
    [ENTBSPC_LOCK] = COMBO(entbspc_combo, QK_LLCK),
    [FJ_CAPS] = COMBO(fjcaps_combo, KC_CAPS)
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [0] = LAYOUT(
        TD(TD_Q_ESC),            KC_W,         KC_E,         KC_R,         KC_T,        KC_Y,    KC_U,         KC_I,         KC_O,         KC_P,
        LGUI_T(KC_A),    LALT_T(KC_S), LCTL_T(KC_D), LSFT_T(KC_F), KC_G,        KC_H,    RSFT_T(KC_J), RCTL_T(KC_K), RALT_T(KC_L), RGUI_T(KC_SCLN),
        KC_Z,            KC_X,         KC_C,         KC_V,         KC_B,        KC_N,    KC_M,         KC_COMM,      KC_DOT,       KC_SLSH,
                                                     LT(1,KC_SPC), LT(2,KC_TAB), LT(3,KC_ENT), LT(4, KC_BSPC)
    ),
    [1] = LAYOUT(
        KC_1,    KC_2,    KC_3,    KC_4,    KC_5,        KC_6,    KC_7,     KC_8,    KC_9,    KC_0,
        _______, _______, _______, _______, _______,     _______, _______,  _______, _______, _______,
        KC_GRV,  KC_MINS, KC_EQL,  KC_BSLS, _______,     _______, KC_QUOT,  KC_LBRC, KC_RBRC, _______,
                                   _______, _______,     _______, _______
    ),
    [2] = LAYOUT(
        KC_GRV,  KC_MINS, KC_EQL,  KC_BSLS, _______,     _______, KC_QUOT,  KC_LBRC, KC_RBRC, _______,
        _______, _______, _______, _______, _______,     _______, _______,  _______, _______, _______,
        _______, _______, _______, _______, _______,     _______, _______,  _______, _______, _______,
                                   _______, _______,     _______, _______
    ),
    [3] = LAYOUT(
        KC_F1,   KC_F2,   KC_F3,   KC_F4,   _______,     KC_HOME, KC_PGUP, KC_PGDN, KC_END,  _______,
        KC_F5,   KC_F6,   KC_F7,   KC_F8,   _______,     _______, _______, _______, _______, _______,
        KC_F9,   KC_F10,  KC_F11,  KC_F12,  _______,     KC_LEFT, KC_DOWN, KC_UP,   KC_RGHT, _______,
                                   _______, _______,     _______, _______
    ),
    [4] = LAYOUT(
        KC_VOLD, KC_VOLU, KC_MPRV, KC_MPLY, KC_MNXT,     KC_WH_U, KC_BTN1, KC_MS_U, KC_BTN2, _______,
        _______, _______, _______, _______, _______,     KC_WH_D, KC_MS_L, KC_MS_D, KC_MS_R, _______,
        _______, _______, _______, _______, _______,     _______, _______, _______, _______, _______,
                                   _______, _______,     _______, _______
    )
};

