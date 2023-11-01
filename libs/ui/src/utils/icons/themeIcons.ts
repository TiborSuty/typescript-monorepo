/**
 * Any is used to supress typescript error when dnymicaly importing svg files.
 * This error is present only in apps/* projects.
 * error TS2322: Type 'Promise<typeof import("*.svg")>' is not assignable to type 'Promise<{ default: ComponentType<any>; }>'.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import {lazy} from 'react';

import fallbackIcon from './fallback.svg';

const icon_1 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/3d_rotation.svg')
);
const icon_3 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/accessibility.svg')
);
const icon_2 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/accessibility_new.svg')
);
const icon_5 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/accessible.svg')
);
const icon_4 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/accessible_forward.svg')
);
const icon_7 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/account_balance.svg')
);
const icon_6 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/account_balance_wallet.svg')
);
const icon_8 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/account_box.svg')
);
const icon_9 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/account_circle.svg')
);
const icon_10 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/add_shopping_cart.svg')
);
const icon_14 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/alarm.svg')
);
const icon_11 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/alarm_add.svg')
);
const icon_12 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/alarm_off.svg')
);
const icon_13 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/alarm_on.svg')
);
const icon_15 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/all_inbox.svg')
);
const icon_16 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/all_out.svg')
);
const icon_17 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/android.svg')
);
const icon_18 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/announcement.svg')
);
const icon_19 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/arrow_right_alt.svg')
);
const icon_20 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/aspect_ratio.svg')
);
const icon_21 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/assessment.svg')
);
const icon_27 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/assignment.svg')
);
const icon_28 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/autorenew.svg')
);
const icon_29 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/backup.svg')
);
const icon_30 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/book.svg'));
const icon_32 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/bookmark.svg')
);
const icon_31 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/bookmark_border.svg')
);
const icon_33 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/bookmarks.svg')
);
const icon_34 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/bug_report.svg')
);
const icon_35 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/build.svg')
);
const icon_36 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/cached.svg')
);
const icon_37 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/calendar_today.svg')
);
const icon_38 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/calendar_view_day.svg')
);
const icon_39 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/camera_enhance.svg')
);
const icon_43 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/change_history.svg')
);
const icon_45 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/check_circle.svg')
);
const icon_44 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/check_circle_outline.svg')
);
const icon_46 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/chrome_reader_mode.svg')
);
const icon_47 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/class.svg')
);
const icon_48 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/code.svg'));
const icon_49 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/commute.svg')
);
const icon_50 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/compare_arrows.svg')
);
const icon_51 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/contact_support.svg')
);
const icon_52 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/copyright.svg')
);
const icon_53 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/credit_card.svg')
);
const icon_54 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/dashboard.svg')
);
const icon_55 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/date_range.svg')
);
const icon_58 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/delete.svg')
);
const icon_56 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/delete_forever.svg')
);
const icon_57 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/delete_outline.svg')
);
const icon_59 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/description.svg')
);
const icon_60 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/dns.svg'));
const icon_63 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/done.svg'));
const icon_61 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/done_all.svg')
);
const icon_62 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/done_outline.svg')
);
const icon_64 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/donut_large.svg')
);
const icon_65 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/donut_small.svg')
);
const icon_66 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/drag_indicator.svg')
);
const icon_67 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/eject.svg')
);
const icon_68 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/euro_symbol.svg')
);
const icon_70 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/event.svg')
);
const icon_69 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/event_seat.svg')
);
const icon_71 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/exit_to_app.svg')
);
const icon_73 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/explore.svg')
);
const icon_72 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/explore_off.svg')
);
const icon_74 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/extension.svg')
);
const icon_76 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/face.svg'));
const icon_75 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/face_unlock.svg')
);
const icon_78 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/favorite.svg')
);
const icon_77 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/favorite_border.svg')
);
const icon_79 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/feedback.svg')
);
const icon_80 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/find_in_page.svg')
);
const icon_81 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/find_replace.svg')
);
const icon_82 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/fingerprint.svg')
);
const icon_83 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/flight_land.svg')
);
const icon_84 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/flight_takeoff.svg')
);
const icon_85 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/flip_to_back.svg')
);
const icon_86 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/flip_to_front.svg')
);
const icon_87 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/g_translate.svg')
);
const icon_88 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/gavel.svg')
);
const icon_89 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/get_app.svg')
);
const icon_90 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/gif.svg'));
const icon_91 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/grade.svg')
);
const icon_92 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/group_work.svg')
);
const icon_94 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/help.svg'));
const icon_93 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/help_outline.svg')
);
const icon_95 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/highlight_off.svg')
);
const icon_96 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/history.svg')
);
const icon_97 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/home.svg'));
const icon_98 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/horizontal_split.svg')
);
const icon_99 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/hourglass_empty.svg')
);
const icon_100 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/hourglass_full.svg')
);
const icon_101 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/http.svg')
);
const icon_102 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/https.svg')
);
const icon_103 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/important_devices.svg')
);
const icon_104 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/income.svg')
);
const icon_106 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/info.svg')
);
const icon_105 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/info_outline.svg')
);
const icon_107 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/input.svg')
);
const icon_108 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/invert_colors.svg')
);
const icon_114 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/language.svg')
);
const icon_115 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/launch.svg')
);
const icon_116 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/lightbulb_outline.svg')
);
const icon_117 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/line_style.svg')
);
const icon_118 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/line_weight.svg')
);
const icon_119 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/list.svg')
);
const icon_122 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/lock.svg')
);
const icon_120 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/lock_open.svg')
);
const icon_121 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/lock_outline.svg')
);
const icon_123 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/loyalty.svg')
);
const icon_1360 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/magic_wand.svg')
);
const icon_124 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/markunread_mailbox.svg')
);
const icon_125 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/maximize.svg')
);
const icon_126 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/minimize.svg')
);
const icon_127 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/motorcycle.svg')
);
const icon_128 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/note_add.svg')
);
const icon_129 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/offline_bolt.svg')
);
const icon_130 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/offline_pin.svg')
);
const icon_131 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/opacity.svg')
);
const icon_132 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/open_in_browser.svg')
);
const icon_133 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/open_in_new.svg')
);
const icon_134 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/open_with.svg')
);
const icon_135 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/pageview.svg')
);
const icon_136 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/pan_tool.svg')
);
const icon_137 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/payment.svg')
);
const icon_146 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/pets.svg')
);
const icon_148 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/picture_in_picture.svg')
);
const icon_147 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/picture_in_picture_alt.svg')
);
const icon_149 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/play_for_work.svg')
);
const icon_150 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/polymer.svg')
);
const icon_151 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/power_settings_new.svg')
);
const icon_152 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/pregnant_woman.svg')
);
const icon_153 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/print.svg')
);
const icon_154 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/query_builder.svg')
);
const icon_155 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/question_answer.svg')
);
const icon_156 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/receipt.svg')
);
const icon_157 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/record_voice_over.svg')
);
const icon_158 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/redeem.svg')
);
const icon_159 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/remove_shopping_cart.svg')
);
const icon_160 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/reorder.svg')
);
const icon_161 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/report_problem.svg')
);
const icon_164 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/restore.svg')
);
const icon_162 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/restore_from_trash.svg')
);
const icon_163 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/restore_page.svg')
);
const icon_165 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/room.svg')
);
const rotateLeft = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/rotateLeft.svg')
);
const rotateRight = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/rotateRight.svg')
);
const icon_166 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/rounded_corner.svg')
);
const icon_167 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/rowing.svg')
);
const icon_168 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/schedule.svg')
);
const icon_169 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/search.svg')
);
const icon_186 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings.svg')
);
const icon_170 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_applications.svg')
);
const icon_171 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_backup_restore.svg')
);
const icon_172 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_bluetooth.svg')
);
const icon_173 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_brightness.svg')
);
const icon_174 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_cell.svg')
);
const icon_175 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_ethernet.svg')
);
const icon_176 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_input_antenna.svg')
);
const icon_177 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_input_component.svg')
);
const icon_178 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_input_composite.svg')
);
const icon_179 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_input_hdmi.svg')
);
const icon_180 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_input_svideo.svg')
);
const icon_181 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_overscan.svg')
);
const icon_182 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_phone.svg')
);
const icon_183 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_power.svg')
);
const icon_184 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_remote.svg')
);
const icon_185 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/settings_voice.svg')
);
const icon_188 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/shop.svg')
);
const icon_187 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/shop_two.svg')
);
const icon_189 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/shopping_basket.svg')
);
const icon_190 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/shopping_cart.svg')
);
const icon_192 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/speaker_notes.svg')
);
const icon_191 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/speaker_notes_off.svg')
);
const icon_193 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/spellcheck.svg')
);
const icon_194 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/star_rate_18px.svg')
);
const icon_195 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/stars.svg')
);
const icon_196 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/store.svg')
);
const icon_197 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/subject.svg')
);
const icon_198 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/supervised_user_circle.svg')
);
const icon_199 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/supervisor_account.svg')
);
const icon_200 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/swap_horiz.svg')
);
const icon_201 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/swap_horizontal_circle.svg')
);
const icon_202 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/swap_vert.svg')
);
const icon_203 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/swap_vertical_circle.svg')
);
const icon_204 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/system_vertical_alt.svg')
);
const icon_206 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/tab.svg'));
const icon_205 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/tab_unselected.svg')
);
const icon_213 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/theaters.svg')
);
const icon_214 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/thumb_down.svg')
);
const icon_215 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/thumb_up.svg')
);
const icon_216 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/thumbs_up_down.svg')
);
const icon_217 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/timeline.svg')
);
const icon_218 = lazy<any>(() => import(/* webpackChunkName: "icons/action" */ './action/toc.svg'));
const icon_219 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/today.svg')
);
const icon_220 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/toll.svg')
);
const icon_221 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/touch_app.svg')
);
const icon_222 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/track_changes.svg')
);
const icon_223 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/translate.svg')
);
const icon_224 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/trending_down.svg')
);
const icon_225 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/trending_flat.svg')
);
const icon_226 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/trending_up.svg')
);
const icon_228 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/turned_in.svg')
);
const icon_227 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/turned_in_not.svg')
);
const icon_229 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/update.svg')
);
const icon_230 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/verified_user.svg')
);
const icon_231 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/vertical_split.svg')
);
const icon_232 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_agenda.svg')
);
const icon_233 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_array.svg')
);
const icon_234 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_carousel.svg')
);
const icon_235 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_column.svg')
);
const icon_236 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_day.svg')
);
const icon_237 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_headline.svg')
);
const icon_238 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_list.svg')
);
const icon_239 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_module.svg')
);
const icon_240 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_quilt.svg')
);
const icon_241 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_stream.svg')
);
const icon_242 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/view_week.svg')
);
const icon_244 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/visibility.svg')
);
const icon_243 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/visibility_off.svg')
);
const icon_245 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/voice_over_off.svg')
);
const icon_246 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/watch_later.svg')
);
const icon_249 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/work.svg')
);
const icon_247 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/work_off.svg')
);
const icon_248 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/work_outline.svg')
);
const icon_250 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/youtube_searched_for.svg')
);
const icon_251 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/zoom_in.svg')
);
const icon_252 = lazy<any>(
  () => import(/* webpackChunkName: "icons/action" */ './action/zoom_out.svg')
);
const icon_255 = lazy<any>(() => import(/* webpackChunkName: "icons/alert" */ './alert/error.svg'));
const icon_254 = lazy<any>(
  () => import(/* webpackChunkName: "icons/alert" */ './alert/error_outline.svg')
);
const icon_256 = lazy<any>(
  () => import(/* webpackChunkName: "icons/alert" */ './alert/notification_important.svg')
);
const icon_258 = lazy<any>(
  () => import(/* webpackChunkName: "icons/alert" */ './alert/warning.svg')
);
const icon_259 = lazy<any>(() => import(/* webpackChunkName: "icons/other" */ './arrow.svg'));
const icon_1345 = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/calendar.svg')
);
const icon_1351 = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/car.svg')
);
const icon_1347 = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/diferential.svg')
);
const icon_1346 = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/engine.svg')
);
const icon_1350 = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/fuel_type.svg')
);
const icon_1348 = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/mileage.svg')
);
const automotivePaid = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/paid.svg')
);
const icon_1349 = lazy<any>(
  () => import(/* webpackChunkName: "icons/automotive" */ './automotive/transmission.svg')
);
const icon_265 = lazy<any>(
  () => import(/* webpackChunkName: "icons/av" */ './AV/branding_watermark.svg')
);
const icon_276 = lazy<any>(
  () => import(/* webpackChunkName: "icons/av" */ './AV/fiber_manual_record.svg')
);
const icon_303 = lazy<any>(() => import(/* webpackChunkName: "icons/av" */ './AV/play_arrow.svg'));
const icon_321 = lazy<any>(() => import(/* webpackChunkName: "icons/av" */ './AV/replay.svg'));
const icon_347 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/business.svg')
);
const icon_349 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/call_made.svg')
);
const icon_350 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/call_merge.svg')
);
const icon_354 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/call_split.svg')
);
const icon_362 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/comment.svg')
);
const icon_371 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/email.svg')
);
const icon_379 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/location_on.svg')
);
const icon_385 = lazy<any>(
  () =>
    import(/* webpackChunkName: "icons/communication" */ './communication/person_add_disabled.svg')
);
const icon_405 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/textsms.svg')
);
const icon_408 = lazy<any>(
  () => import(/* webpackChunkName: "icons/communication" */ './communication/vpn_key.svg')
);
const icon_409 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/backbench.svg')
);
const icon_410 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/column_trim_on_the_left.svg')
);
const icon_411 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/column_trim_on_the_right.svg')
);
const icon_412 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/dashboard.svg')
);
const icon_413 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/drivers_seat.svg')
);
const icon_414 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/driving_wheel.svg')
);
const icon_415 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/front_bumper.svg')
);
const icon_416 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/front_hood.svg')
);
const icon_417 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/l_mirror.svg')
);
const icon_419 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lf_door.svg')
);
const icon_418 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lf_door_trim.svg')
);
const icon_420 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lf_fender.svg')
);
const icon_421 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lf_light.svg')
);
const icon_423 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lr_door.svg')
);
const icon_422 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lr_door_trim.svg')
);
const icon_424 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lr_fender.svg')
);
const icon_425 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/lr_light.svg')
);
const icon_426 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/passenger_seat.svg')
);
const icon_427 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/r_mirror.svg')
);
const icon_428 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rear_bumper.svg')
);
const icon_429 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rear_window.svg')
);
const icon_431 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rf_door.svg')
);
const icon_430 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rf_door_trim.svg')
);
const icon_432 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rf_fender.svg')
);
const icon_433 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rf_light.svg')
);
const icon_434 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/roof.svg')
);
const icon_436 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rr_door.svg')
);
const icon_435 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rr_door_trim.svg')
);
const icon_437 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rr_fender.svg')
);
const icon_438 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/rr_light.svg')
);
const icon_439 = lazy<any>(
  () => import(/* webpackChunkName: "icons/condition" */ './condition/windshield.svg')
);
const icon_443 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/add.svg')
);
const icon_440 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/add_box.svg')
);
const icon_442 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/add_circle.svg')
);
const icon_441 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/add_circle_outline.svg')
);
const icon_444 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/archive.svg')
);
const icon_445 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/attribution.svg')
);
const icon_446 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/backspace.svg')
);
const icon_447 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/ballot.svg')
);
const icon_448 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/block.svg')
);
const icon_449 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/clear.svg')
);
const icon_450 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/copy.svg')
);
const icon_451 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/create.svg')
);
const icon_452 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/cut.svg')
);
const icon_453 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/delete_sweep.svg')
);
const icon_454 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/drafts.svg')
);
const icon_455 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/file_copy.svg')
);
const icon_456 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/filter_list.svg')
);
const icon_457 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/flag.svg')
);
const icon_458 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/font_download.svg')
);
const icon_459 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/forward.svg')
);
const icon_460 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/gesture.svg')
);
const icon_461 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/how_to_reg.svg')
);
const icon_462 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/how_to_vote.svg')
);
const icon_463 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/inbox.svg')
);
const icon_465 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/link.svg')
);
const icon_464 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/link_off.svg')
);
const icon_466 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/low_priority.svg')
);
const icon_467 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/mail.svg')
);
const icon_468 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/markunread.svg')
);
const icon_469 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/move_to_inbox.svg')
);
const icon_470 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/next_week.svg')
);
const icon_471 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/outlined_flag.svg')
);
const icon_472 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/paste.svg')
);
const icon_473 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/redo.svg')
);
const icon_476 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/remove.svg')
);
const icon_475 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/remove_circle.svg')
);
const icon_474 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/remove_circle_outline.svg')
);
const icon_478 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/reply.svg')
);
const icon_477 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/reply_all.svg')
);
const icon_481 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/report.svg')
);
const icon_479 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/report_gmailerrorred.svg')
);
const icon_480 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/report_off.svg')
);
const icon_483 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/save.svg')
);
const icon_482 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/save_alt.svg')
);
const icon_484 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/select_all.svg')
);
const icon_485 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/send.svg')
);
const icon_486 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/sort.svg')
);
const icon_487 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/text_format.svg')
);
const icon_488 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/unarchive.svg')
);
const icon_489 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/undo.svg')
);
const icon_490 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/waves.svg')
);
const icon_491 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/weekend.svg')
);
const icon_492 = lazy<any>(
  () => import(/* webpackChunkName: "icons/content" */ './content/where_to_vote.svg')
);
const icon_495 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/employee.svg')
);
const icon_496 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/invoice.svg')
);
const icon_499 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/no_data.svg')
);
const icon_500 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/no_images.svg')
);
const icon_501 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/no_messages.svg')
);
const icon_502 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/no_person.svg')
);
const icon_503 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/no_table_data.svg')
);
const pict_animal = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/pict_animal.svg')
);
const pict_assistance = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/pict_assistance.svg')
);
const pict_car_crash = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/pict_car_crash.svg')
);
const pict_natural_element = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/pict_natural_element.svg')
);
const pict_steal = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/pict_steal.svg')
);
const pict_vandalism = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/pict_vandalism.svg')
);
const icon_505 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/push_pin.svg')
);
const icon_504 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/push_pin_outlined.svg')
);
const icon_510 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/tractor.svg')
);
const icon_514 = lazy<any>(
  () => import(/* webpackChunkName: "icons/custom" */ './custom/warehouse.svg')
);
const icon_516 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './devices/access_alarm.svg')
);
const icon_518 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './devices/access_time.svg')
);
const icon_575 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/attach_money.svg')
);
const icon_580 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/border_color.svg')
);
const icon_590 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/drag_handle.svg')
);
const icon_620 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/insert_drive_file.svg')
);
const icon_628 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/mode.svg')
);
const icon_629 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/monetization_on.svg')
);
const icon_640 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/show_chart.svg')
);
const icon_643 = lazy<any>(
  () => import(/* webpackChunkName: "icons/editor" */ './editor/table_chart.svg')
);
const icon_652 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './file/cloud_done.svg')
);
const icon_660 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './file/download.svg')
);
const icon_663 = lazy<any>(() => import(/* webpackChunkName: "icons/file" */ './file/folder.svg'));
const icon_661 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './file/folder_open.svg')
);
const icon_664 = lazy<any>(() => import(/* webpackChunkName: "icons/file" */ './file/upload.svg'));
const icon_665 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_DOC.svg')
);
const icon_666 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_JPG.svg')
);
const icon_667 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_JSON.svg')
);
const icon_668 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_PDF.svg')
);
const icon_669 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_PNG.svg')
);
const icon_670 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_TXT.svg')
);
const icon_671 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_XLS_CSV.svg')
);
const icon_672 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_compact/property_ZIP.svg')
);
const icon_673 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_CSV.svg')
);
const icon_674 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_DOC.svg')
);
const icon_675 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_JPG.svg')
);
const icon_676 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_JSON.svg')
);
const icon_677 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_PDF.svg')
);
const icon_678 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_PNG.svg')
);
const icon_679 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_TXT.svg')
);
const icon_680 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_XLS.svg')
);
const icon_681 = lazy<any>(
  () => import(/* webpackChunkName: "icons/file" */ './files_default/file_type_ZIP.svg')
);
const icon_682 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ABW.svg')
);
const icon_683 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/AFG.svg')
);
const icon_684 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/AGO.svg')
);
const icon_685 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/AIA.svg')
);
const icon_686 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ALA.svg')
);
const icon_687 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ALB.svg')
);
const icon_688 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/AND.svg')
);
const icon_689 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ANT.svg')
);
const icon_690 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ARE.svg')
);
const icon_691 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ARG.svg')
);
const icon_692 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ARM.svg')
);
const icon_693 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ATG.svg')
);
const icon_694 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/AUS.svg')
);
const icon_695 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/austria.svg')
);
const icon_696 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/AUT.svg')
);
const icon_697 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/AZE.svg')
);
const icon_698 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BDI.svg')
);
const icon_699 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BEL.svg')
);
const icon_700 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BEN.svg')
);
const icon_701 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BFA.svg')
);
const icon_702 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BGD.svg')
);
const icon_703 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BGR.svg')
);
const icon_704 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BHR.svg')
);
const icon_705 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BHS.svg')
);
const icon_706 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BIH.svg')
);
const icon_707 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BLR.svg')
);
const icon_708 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BLZ.svg')
);
const icon_709 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BMU.svg')
);
const icon_710 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BOL.svg')
);
const icon_711 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BRA.svg')
);
const icon_712 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BRB.svg')
);
const icon_713 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BRN.svg')
);
const icon_714 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BTN.svg')
);
const icon_715 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/BWA.svg')
);
const icon_716 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CAN.svg')
);
const icon_717 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CHE.svg')
);
const icon_718 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CHL.svg')
);
const icon_719 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CHN.svg')
);
const icon_720 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CIV.svg')
);
const icon_721 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CMR.svg')
);
const icon_722 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/COD.svg')
);
const icon_723 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/COG.svg')
);
const icon_724 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/COL.svg')
);
const icon_725 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/COM.svg')
);
const icon_726 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CRI.svg')
);
const icon_727 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CUB.svg')
);
const icon_728 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CYM.svg')
);
const icon_729 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/CYP.svg')
);
const icon_730 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/CZE.svg')
);
const icon_731 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/czech_republic.svg')
);
const icon_732 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/DEU.svg')
);
const icon_733 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/DJI.svg')
);
const icon_734 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/DMA.svg')
);
const icon_735 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/DNK.svg')
);
const icon_736 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/DOM.svg')
);
const icon_737 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/DZA.svg')
);
const icon_738 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ECU.svg')
);
const icon_739 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/EGY.svg')
);
const icon_740 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ERI.svg')
);
const icon_741 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/ESP.svg')
);
const icon_742 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/EST.svg')
);
const icon_743 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ETH.svg')
);
const icon_744 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/EUE.svg')
);
const icon_745 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/FIN.svg')
);
const icon_746 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/FJI.svg')
);
const icon_747 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/FLK.svg')
);
const icon_748 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/FRA.svg')
);
const icon_749 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/FSM.svg')
);
const icon_750 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GAB.svg')
);
const icon_751 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/GBR.svg')
);
const icon_752 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GEO.svg')
);
const icon_753 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/germany.svg')
);
const icon_754 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GGY.svg')
);
const icon_755 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GHA.svg')
);
const icon_756 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GIB.svg')
);
const icon_757 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GIN.svg')
);
const icon_758 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GMB.svg')
);
const icon_759 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GNB.svg')
);
const icon_760 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GNQ.svg')
);
const icon_761 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GRC.svg')
);
const icon_762 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GRD.svg')
);
const icon_763 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GTM.svg')
);
const icon_764 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/GUY.svg')
);
const icon_765 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/HKG.svg')
);
const icon_766 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/HND.svg')
);
const icon_767 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/HRV.svg')
);
const icon_768 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/HTI.svg')
);
const icon_769 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/HUN.svg')
);
const icon_770 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/IDN.svg')
);
const icon_771 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/IMN.svg')
);
const icon_772 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/IND.svg')
);
const icon_773 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/IRL.svg')
);
const icon_774 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/IRN.svg')
);
const icon_775 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/IRQ.svg')
);
const icon_776 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ISL.svg')
);
const icon_777 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ISR.svg')
);
const icon_778 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/ITA.svg')
);
const icon_779 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/JAM.svg')
);
const icon_780 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/JEY.svg')
);
const icon_781 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/JOR.svg')
);
const icon_782 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/JPN.svg')
);
const icon_783 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/KAZ.svg')
);
const icon_784 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/KEN.svg')
);
const icon_785 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/KGZ.svg')
);
const icon_786 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/KHM.svg')
);
const icon_787 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/KNA.svg')
);
const icon_788 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/KOR.svg')
);
const icon_789 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/KWT.svg')
);
const icon_790 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LAO.svg')
);
const icon_791 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LBN.svg')
);
const icon_792 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LBR.svg')
);
const icon_793 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LBY.svg')
);
const icon_794 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LCA.svg')
);
const icon_795 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LIE.svg')
);
const icon_796 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LKA.svg')
);
const icon_797 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LSO.svg')
);
const icon_798 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LTU.svg')
);
const icon_799 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LUX.svg')
);
const icon_800 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/LVA.svg')
);
const icon_801 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MAC.svg')
);
const icon_802 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MAR.svg')
);
const icon_803 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MCO.svg')
);
const icon_804 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MDA.svg')
);
const icon_805 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MDG.svg')
);
const icon_806 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MDV.svg')
);
const icon_807 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MEX.svg')
);
const icon_808 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MKD.svg')
);
const icon_809 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MLI.svg')
);
const icon_810 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MLT.svg')
);
const icon_811 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MMR.svg')
);
const icon_812 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MNE.svg')
);
const icon_813 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MNG.svg')
);
const icon_814 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MOZ.svg')
);
const icon_815 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MRT.svg')
);
const icon_816 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MSR.svg')
);
const icon_817 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MUS.svg')
);
const icon_818 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MWI.svg')
);
const icon_819 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/MYS.svg')
);
const icon_820 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NAM.svg')
);
const icon_821 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NER.svg')
);
const icon_822 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NGA.svg')
);
const icon_823 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NIC.svg')
);
const icon_824 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NLD.svg')
);
const icon_825 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NOR.svg')
);
const icon_826 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NPL.svg')
);
const icon_827 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/NZL.svg')
);
const icon_828 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/OMN.svg')
);
const icon_829 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PAK.svg')
);
const icon_830 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PAN.svg')
);
const icon_831 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PER.svg')
);
const icon_832 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PHL.svg')
);
const icon_833 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PLW.svg')
);
const icon_834 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PNG.svg')
);
const icon_835 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/POL.svg')
);
const icon_836 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PRI.svg')
);
const icon_837 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PRK.svg')
);
const icon_838 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PRT.svg')
);
const icon_839 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PRY.svg')
);
const icon_840 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/PYF.svg')
);
const icon_841 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/QAT.svg')
);
const icon_842 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/RCA.svg')
);
const icon_843 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ROU.svg')
);
const icon_844 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/RSM.svg')
);
const icon_845 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/RUS.svg')
);
const icon_846 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/RWA.svg')
);
const icon_847 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SAU.svg')
);
const icon_848 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SDN.svg')
);
const icon_849 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SEN.svg')
);
const icon_850 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SGP.svg')
);
const icon_851 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SHN.svg')
);
const icon_852 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SLB.svg')
);
const icon_853 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SLE.svg')
);
const icon_854 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SLV.svg')
);
const icon_855 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SOM.svg')
);
const icon_856 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SRB.svg')
);
const icon_857 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SSD.svg')
);
const icon_858 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/STP.svg')
);
const icon_859 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SUR.svg')
);
const icon_860 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/SVK.svg')
);
const icon_861 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SVN.svg')
);
const icon_862 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SWE.svg')
);
const icon_863 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SWZ.svg')
);
const icon_864 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SYC.svg')
);
const icon_865 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/SYR.svg')
);
const icon_866 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TCA.svg')
);
const icon_867 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TCD.svg')
);
const icon_868 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TGO.svg')
);
const icon_869 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/THA.svg')
);
const icon_870 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TJK.svg')
);
const icon_871 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TKM.svg')
);
const icon_872 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TMP.svg')
);
const icon_873 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TON.svg')
);
const icon_874 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TTO.svg')
);
const icon_875 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TUN.svg')
);
const icon_876 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TUR.svg')
);
const icon_877 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TWN.svg')
);
const icon_878 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/TZA.svg')
);
const icon_879 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/UGA.svg')
);
const icon_880 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/UKR.svg')
);
const icon_881 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/URY.svg')
);
const icon_882 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './flags/USA.svg')
);
const icon_883 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/UZB.svg')
);
const icon_884 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/VCT.svg')
);
const icon_885 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/VEN.svg')
);
const icon_886 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/VGB.svg')
);
const icon_887 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/VNM.svg')
);
const icon_888 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/VUT.svg')
);
const icon_889 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/WSM.svg')
);
const icon_890 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/YEM.svg')
);
const icon_891 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ZAF.svg')
);
const icon_892 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ZMB.svg')
);
const icon_893 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/other" */ './flags/ZWE.svg')
);
const icon_894 = lazy<any>(
  () => import(/* webpackChunkName: "icons/flags/locale" */ './germany.svg')
);
const icon_899 = lazy<any>(
  () => import(/* webpackChunkName: "icons/hardware" */ './hardware/desktop_mac.svg')
);
const icon_909 = lazy<any>(
  () => import(/* webpackChunkName: "icons/hardware" */ './hardware/keyboard_arrow_down.svg')
);
const icon_910 = lazy<any>(
  () => import(/* webpackChunkName: "icons/hardware" */ './hardware/keyboard_arrow_left.svg')
);
const icon_911 = lazy<any>(
  () => import(/* webpackChunkName: "icons/hardware" */ './hardware/keyboard_arrow_right.svg')
);
const icon_912 = lazy<any>(
  () => import(/* webpackChunkName: "icons/hardware" */ './hardware/keyboard_arrow_up.svg')
);
const icon_933 = lazy<any>(
  () => import(/* webpackChunkName: "icons/hardware" */ './hardware/security.svg')
);
const icon_945 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './icon_placeholder.svg')
);
const icon_946 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/add_a_photo.svg')
);
const icon_950 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/add_photo_alternate.svg')
);
const icon_955 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/blur_off.svg')
);
const icon_967 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/camera_alt.svg')
);
const icon_995 = lazy<any>(() => import(/* webpackChunkName: "icons/image" */ './image/edit.svg'));
const icon_1003 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/filter_2.svg')
);
const icon_1037 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/image.svg')
);
const icon_1042 = lazy<any>(() => import(/* webpackChunkName: "icons/image" */ './image/lens.svg'));
const icon_1074 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/photo.svg')
);
const icon_1083 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/photo_album.svg')
);
const icon_1068 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/photo_camera.svg')
);
const icon_1077 = lazy<any>(
  () => import(/* webpackChunkName: "icons/image" */ './image/remove_red_eye.svg')
);
const icon_1115 = lazy<any>(
  () => import(/* webpackChunkName: "icons/maps" */ './maps/directions_car.svg')
);
const icon_1125 = lazy<any>(
  () => import(/* webpackChunkName: "icons/maps" */ './maps/fastfood.svg')
);
const icon_1146 = lazy<any>(
  () => import(/* webpackChunkName: "icons/maps" */ './maps/local_mall.svg')
);
const icon_1148 = lazy<any>(
  () => import(/* webpackChunkName: "icons/maps" */ './maps/local_offer.svg')
);
const icon_1149 = lazy<any>(
  () => import(/* webpackChunkName: "icons/maps" */ './maps/local_parking.svg')
);
const icon_1166 = lazy<any>(
  () => import(/* webpackChunkName: "icons/maps" */ './maps/person_pin.svg')
);
const icon_1168 = lazy<any>(() => import(/* webpackChunkName: "icons/maps" */ './maps/place.svg'));
const icon_1183 = lazy<any>(
  () => import(/* webpackChunkName: "icons/maps" */ './maps/zoom_out_map.svg')
);
const pneu_hotel = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './modules/pneu_hotel.svg')
);
const icon_1184 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/apps.svg')
);
const icon_1186 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_back.svg')
);
const icon_1185 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_back_ios.svg')
);
const icon_1187 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_downward.svg')
);
const icon_1189 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_drop_down.svg')
);
const icon_1188 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_drop_down_circle.svg')
);
const icon_1190 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_drop_up.svg')
);
const icon_1192 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_forward.svg')
);
const icon_1191 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_forward_ios.svg')
);
const icon_1193 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_left.svg')
);
const icon_1194 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_right.svg')
);
const icon_1195 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/arrow_upward.svg')
);
const icon_1196 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/cancel.svg')
);
const icon_1352 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/cancel_outline.svg')
);
const icon_1197 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/check.svg')
);
const icon_1198 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/chevron_left.svg')
);
const icon_1199 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/chevron_right.svg')
);
const icon_1200 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/close.svg')
);
const icon_1201 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/expand_less.svg')
);
const icon_1202 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/expand_more.svg')
);
const icon_1203 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/first_page.svg')
);
const icon_1205 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/fullscreen.svg')
);
const icon_1204 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/fullscreen_exit.svg')
);
const icon_1206 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/last_page.svg')
);
const icon_1207 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/menu.svg')
);
const icon_1208 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/more_horiz.svg')
);
const icon_1209 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/more_vert.svg')
);
const icon_1210 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/refresh.svg')
);
const icon_1211 = lazy<any>(
  () =>
    import(/* webpackChunkName: "icons/navigation" */ './navigation/subdirectory_arrow_left.svg')
);
const icon_1212 = lazy<any>(
  () =>
    import(/* webpackChunkName: "icons/navigation" */ './navigation/subdirectory_arrow_right.svg')
);
const icon_1213 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/unfold_less.svg')
);
const icon_1214 = lazy<any>(
  () => import(/* webpackChunkName: "icons/navigation" */ './navigation/unfold_more.svg')
);
const icon_1230 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './notification/do_disturb.svg')
);
const icon_1231 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './notification/terminal.svg')
);
const icon_1278 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './places/business_center.svg')
);
const icon_1295 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/cake.svg')
);
const icon_1296 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/domain.svg')
);
const icon_1298 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/group.svg')
);
const icon_1306 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/notifications.svg')
);
const icon_1310 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/people.svg')
);
const icon_1313 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/person.svg')
);
const icon_1311 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/person_add.svg')
);
const icon_1315 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/poll.svg')
);
const icon_1316 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/publicon.svg')
);
const icon_1323 = lazy<any>(
  () => import(/* webpackChunkName: "icons/social" */ './social/share.svg')
);
const icon_1340 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './toggle/minus.svg')
);
const icon_1331 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './toggle/radio_button_checked.svg')
);
const icon_1332 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './toggle/radio_button_unchecked.svg')
);
const icon_1338 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './toggle/star.svg')
);
const icon_1339 = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './toggle/tick.svg')
);
const icon_1342 = lazy<any>(() => import(/* webpackChunkName: "icons/other" */ './upload.svg'));
const icon_1343 = lazy<any>(() => import(/* webpackChunkName: "icons/other" */ './view.svg'));
const icon_1344 = lazy<any>(() => import(/* webpackChunkName: "icons/other" */ './viewOff.svg'));
const wizardDanger = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './wizard/danger.svg')
);
const wizardInformational = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './wizard/informational.svg')
);
const wizardSuccess = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './wizard/success.svg')
);
const wizardWarning = lazy<any>(
  () => import(/* webpackChunkName: "icons/other" */ './wizard/warning.svg')
);

export const themeIcons = {
  'action/3d_rotation': icon_1,
  'action/accessibility_new': icon_2,
  'action/accessibility': icon_3,
  'action/accessible_forward': icon_4,
  'action/accessible': icon_5,
  'action/account_balance_wallet': icon_6,
  'action/account_balance': icon_7,
  'action/account_box': icon_8,
  'action/account_circle': icon_9,
  'action/add_shopping_cart': icon_10,
  'action/alarm_add': icon_11,
  'action/alarm_off': icon_12,
  'action/alarm_on': icon_13,
  'action/alarm': icon_14,
  'action/all_inbox': icon_15,
  'action/all_out': icon_16,
  'action/android': icon_17,
  'action/announcement': icon_18,
  'action/arrow_right_alt': icon_19,
  'action/aspect_ratio': icon_20,
  'action/assessment': icon_21,
  'action/assignment': icon_27,
  'action/autorenew': icon_28,
  'action/backup': icon_29,
  'action/book': icon_30,
  'action/bookmark_border': icon_31,
  'action/bookmark': icon_32,
  'action/bookmarks': icon_33,
  'action/bug_report': icon_34,
  'action/build': icon_35,
  'action/cached': icon_36,
  'action/calendar_today': icon_37,
  'action/calendar_view_day': icon_38,
  'action/camera_enhance': icon_39,
  'action/change_history': icon_43,
  'action/check_circle_outline': icon_44,
  'action/check_circle': icon_45,
  'action/chrome_reader_mode': icon_46,
  'action/class': icon_47,
  'action/code': icon_48,
  'action/commute': icon_49,
  'action/compare_arrows': icon_50,
  'action/contact_support': icon_51,
  'action/copyright': icon_52,
  'action/credit_card': icon_53,
  'action/dashboard': icon_54,
  'action/date_range': icon_55,
  'action/delete_forever': icon_56,
  'action/delete_outline': icon_57,
  'action/delete': icon_58,
  'action/description': icon_59,
  'action/dns': icon_60,
  'action/done_all': icon_61,
  'action/done_outline': icon_62,
  'action/done': icon_63,
  'action/donut_large': icon_64,
  'action/donut_small': icon_65,
  'action/drag_indicator': icon_66,
  'action/eject': icon_67,
  'action/euro_symbol': icon_68,
  'action/event_seat': icon_69,
  'action/event': icon_70,
  'action/exit_to_app': icon_71,
  'action/explore_off': icon_72,
  'action/explore': icon_73,
  'action/extension': icon_74,
  'action/face_unlock': icon_75,
  'action/face': icon_76,
  'action/favorite_border': icon_77,
  'action/favorite': icon_78,
  'action/feedback': icon_79,
  'action/find_in_page': icon_80,
  'action/find_replace': icon_81,
  'action/fingerprint': icon_82,
  'action/flight_land': icon_83,
  'action/flight_takeoff': icon_84,
  'action/flip_to_back': icon_85,
  'action/flip_to_front': icon_86,
  'action/g_translate': icon_87,
  'action/gavel': icon_88,
  'action/get_app': icon_89,
  'action/gif': icon_90,
  'action/grade': icon_91,
  'action/group_work': icon_92,
  'action/help_outline': icon_93,
  'action/help': icon_94,
  'action/highlight_off': icon_95,
  'action/history': icon_96,
  'action/home': icon_97,
  'action/horizontal_split': icon_98,
  'action/hourglass_empty': icon_99,
  'action/hourglass_full': icon_100,
  'action/http': icon_101,
  'action/https': icon_102,
  'action/important_devices': icon_103,
  'action/income': icon_104,
  'action/info_outline': icon_105,
  'action/info': icon_106,
  'action/input': icon_107,
  'action/invert_colors': icon_108,
  'action/language': icon_114,
  'action/launch': icon_115,
  'action/lightbulb_outline': icon_116,
  'action/line_style': icon_117,
  'action/line_weight': icon_118,
  'action/list': icon_119,
  'action/lock_open': icon_120,
  'action/lock_outline': icon_121,
  'action/lock': icon_122,
  'action/loyalty': icon_123,
  'action/markunread_mailbox': icon_124,
  'action/maximize': icon_125,
  'action/minimize': icon_126,
  'action/motorcycle': icon_127,
  'action/note_add': icon_128,
  'action/offline_bolt': icon_129,
  'action/offline_pin': icon_130,
  'action/opacity': icon_131,
  'action/open_in_browser': icon_132,
  'action/open_in_new': icon_133,
  'action/open_with': icon_134,
  'action/pageview': icon_135,
  'action/pan_tool': icon_136,
  'action/payment': icon_137,
  'action/pets': icon_146,
  'action/picture_in_picture_alt': icon_147,
  'action/picture_in_picture': icon_148,
  'action/play_for_work': icon_149,
  'action/polymer': icon_150,
  'action/power_settings_new': icon_151,
  'action/pregnant_woman': icon_152,
  'action/print': icon_153,
  'action/query_builder': icon_154,
  'action/question_answer': icon_155,
  'action/receipt': icon_156,
  'action/record_voice_over': icon_157,
  'action/redeem': icon_158,
  'action/remove_shopping_cart': icon_159,
  'action/reorder': icon_160,
  'action/report_problem': icon_161,
  'action/restore_from_trash': icon_162,
  'action/restore_page': icon_163,
  'action/restore': icon_164,
  'action/room': icon_165,
  'action/rounded_corner': icon_166,
  'action/rowing': icon_167,
  'action/schedule': icon_168,
  'action/search': icon_169,
  'action/settings_applications': icon_170,
  'action/settings_backup_restore': icon_171,
  'action/settings_bluetooth': icon_172,
  'action/settings_brightness': icon_173,
  'action/settings_cell': icon_174,
  'action/settings_ethernet': icon_175,
  'action/settings_input_antenna': icon_176,
  'action/settings_input_component': icon_177,
  'action/settings_input_composite': icon_178,
  'action/settings_input_hdmi': icon_179,
  'action/settings_input_svideo': icon_180,
  'action/settings_overscan': icon_181,
  'action/settings_phone': icon_182,
  'action/settings_power': icon_183,
  'action/settings_remote': icon_184,
  'action/settings_voice': icon_185,
  'action/settings': icon_186,
  'action/shop_two': icon_187,
  'action/shop': icon_188,
  'action/shopping_basket': icon_189,
  'action/shopping_cart': icon_190,
  'action/speaker_notes_off': icon_191,
  'action/speaker_notes': icon_192,
  'action/spellcheck': icon_193,
  'action/star_rate_18px': icon_194,
  'action/stars': icon_195,
  'action/store': icon_196,
  'action/subject': icon_197,
  'action/supervised_user_circle': icon_198,
  'action/supervisor_account': icon_199,
  'action/swap_horiz': icon_200,
  'action/swap_horizontal_circle': icon_201,
  'action/swap_vert': icon_202,
  'action/swap_vertical_circle': icon_203,
  'action/system_vertical_alt': icon_204,
  'action/tab_unselected': icon_205,
  'action/tab': icon_206,
  'action/theaters': icon_213,
  'action/thumb_down': icon_214,
  'action/thumb_up': icon_215,
  'action/thumbs_up_down': icon_216,
  'action/timeline': icon_217,
  'action/toc': icon_218,
  'action/today': icon_219,
  'action/toll': icon_220,
  'action/touch_app': icon_221,
  'action/track_changes': icon_222,
  'action/translate': icon_223,
  'action/trending_down': icon_224,
  'action/trending_flat': icon_225,
  'action/trending_up': icon_226,
  'action/turned_in_not': icon_227,
  'action/turned_in': icon_228,
  'action/update': icon_229,
  'action/verified_user': icon_230,
  'action/vertical_split': icon_231,
  'action/view_agenda': icon_232,
  'action/view_array': icon_233,
  'action/view_carousel': icon_234,
  'action/view_column': icon_235,
  'action/view_day': icon_236,
  'action/view_headline': icon_237,
  'action/view_list': icon_238,
  'action/view_module': icon_239,
  'action/view_quilt': icon_240,
  'action/view_stream': icon_241,
  'action/view_week': icon_242,
  'action/visibility_off': icon_243,
  'action/visibility': icon_244,
  'action/voice_over_off': icon_245,
  'action/watch_later': icon_246,
  'action/work_off': icon_247,
  'action/work_outline': icon_248,
  'action/work': icon_249,
  'action/youtube_searched_for': icon_250,
  'action/zoom_in': icon_251,
  'action/zoom_out': icon_252,
  'action/magic_wand': icon_1360,
  'action/rotateRight': rotateRight,
  'action/rotateLeft': rotateLeft,
  'automotive/calendar': icon_1345,
  'automotive/differential': icon_1347,
  'automotive/engine': icon_1346,
  'automotive/fuel_type': icon_1350,
  'automotive/mileage': icon_1348,
  'automotive/paid': automotivePaid,
  'automotive/transmission': icon_1349,
  'automotive/car': icon_1351,
  'alert/error_outline': icon_254,
  'alert/error': icon_255,
  'alert/notification_important': icon_256,
  'alert/warning': icon_258,
  arrow: icon_259,
  'AV/branding_watermark': icon_265,
  'AV/fiber_manual_record': icon_276,
  'AV/play_arrow': icon_303,
  'AV/replay': icon_321,
  'communication/business': icon_347,
  'communication/call_made': icon_349,
  'communication/call_merge': icon_350,
  'communication/call_split': icon_354,
  'communication/comment': icon_362,
  'communication/email': icon_371,
  'communication/location_on': icon_379,
  'communication/person_add_disabled': icon_385,
  'communication/textsms': icon_405,
  'communication/vpn_key': icon_408,
  /**
   * Do not remove condition/* icons
   * BE uses them and it's not typed
   */
  'condition/backbench': icon_409,
  'condition/column_trim_on_the_left': icon_410,
  'condition/column_trim_on_the_right': icon_411,
  'condition/dashboard': icon_412,
  'condition/drivers_seat': icon_413,
  'condition/driving_wheel': icon_414,
  'condition/front_bumper': icon_415,
  'condition/front_hood': icon_416,
  'condition/l_mirror': icon_417,
  'condition/lf_door_trim': icon_418,
  'condition/lf_door': icon_419,
  'condition/lf_fender': icon_420,
  'condition/lf_light': icon_421,
  'condition/lr_door_trim': icon_422,
  'condition/lr_door': icon_423,
  'condition/lr_fender': icon_424,
  'condition/lr_light': icon_425,
  'condition/passenger_seat': icon_426,
  'condition/r_mirror': icon_427,
  'condition/rear_bumper': icon_428,
  'condition/rear_window': icon_429,
  'condition/rf_door_trim': icon_430,
  'condition/rf_door': icon_431,
  'condition/rf_fender': icon_432,
  'condition/rf_light': icon_433,
  'condition/roof': icon_434,
  'condition/rr_door_trim': icon_435,
  'condition/rr_door': icon_436,
  'condition/rr_fender': icon_437,
  'condition/rr_light': icon_438,
  'condition/windshield': icon_439,
  /**
   * Do not remove condition/* icons
   * BE uses them and it's not typed
   */
  'content/add_box': icon_440,
  'content/add_circle_outline': icon_441,
  'content/add_circle': icon_442,
  'content/add': icon_443,
  'content/archive': icon_444,
  'content/attribution': icon_445,
  'content/backspace': icon_446,
  'content/ballot': icon_447,
  'content/block': icon_448,
  'content/clear': icon_449,
  'content/copy': icon_450,
  'content/create': icon_451,
  'content/cut': icon_452,
  'content/delete_sweep': icon_453,
  'content/drafts': icon_454,
  'content/file_copy': icon_455,
  'content/filter_list': icon_456,
  'content/flag': icon_457,
  'content/font_download': icon_458,
  'content/forward': icon_459,
  'content/gesture': icon_460,
  'content/how_to_reg': icon_461,
  'content/how_to_vote': icon_462,
  'content/inbox': icon_463,
  'content/link_off': icon_464,
  'content/link': icon_465,
  'content/low_priority': icon_466,
  'content/mail': icon_467,
  'content/markunread': icon_468,
  'content/move_to_inbox': icon_469,
  'content/next_week': icon_470,
  'content/outlined_flag': icon_471,
  'content/paste': icon_472,
  'content/redo': icon_473,
  'content/remove_circle_outline': icon_474,
  'content/remove_circle': icon_475,
  'content/remove': icon_476,
  'content/reply_all': icon_477,
  'content/reply': icon_478,
  'content/report_gmailerrorred': icon_479,
  'content/report_off': icon_480,
  'content/report': icon_481,
  'content/save_alt': icon_482,
  'content/save': icon_483,
  'content/select_all': icon_484,
  'content/send': icon_485,
  'content/sort': icon_486,
  'content/text_format': icon_487,
  'content/unarchive': icon_488,
  'content/undo': icon_489,
  'content/waves': icon_490,
  'content/weekend': icon_491,
  'content/where_to_vote': icon_492,
  'custom/employee': icon_495,
  'custom/invoice': icon_496,
  'custom/no_data': icon_499,
  'custom/no_images': icon_500,
  'custom/no_messages': icon_501,
  'custom/no_person': icon_502,
  'custom/no_table_data': icon_503,
  'custom/push_pin_outlined': icon_504,
  'custom/push_pin': icon_505,
  'custom/tractor': icon_510,
  'custom/warehouse': icon_514,
  'pictogram/animal': pict_animal,
  'pictogram/assistance': pict_assistance,
  'pictogram/car_crash': pict_car_crash,
  'pictogram/natural_element': pict_natural_element,
  'pictogram/steal': pict_steal,
  'pictogram/vandalism': pict_vandalism,
  'devices/access_alarm': icon_516,
  'devices/access_time': icon_518,
  'editor/attach_money': icon_575,
  'editor/border_color': icon_580,
  'editor/drag_handle': icon_590,
  'editor/insert_drive_file': icon_620,
  'editor/mode': icon_628,
  'editor/monetization_on': icon_629,
  'editor/show_chart': icon_640,
  'editor/table_chart': icon_643,
  'file/cloud_done': icon_652,
  'file/download': icon_660,
  'file/folder_open': icon_661,
  'file/folder': icon_663,
  'file/upload': icon_664,
  'files_compact/property_DOC': icon_665,
  'files_compact/property_JPG': icon_666,
  'files_compact/property_JSON': icon_667,
  'files_compact/property_PDF': icon_668,
  'files_compact/property_PNG': icon_669,
  'files_compact/property_TXT': icon_670,
  'files_compact/property_XLS_CSV': icon_671,
  'files_compact/property_ZIP': icon_672,
  'files_default/file_type_CSV': icon_673,
  'files_default/file_type_DOC': icon_674,
  'files_default/file_type_JPG': icon_675,
  'files_default/file_type_JSON': icon_676,
  'files_default/file_type_PDF': icon_677,
  'files_default/file_type_PNG': icon_678,
  'files_default/file_type_TXT': icon_679,
  'files_default/file_type_XLS': icon_680,
  'files_default/file_type_ZIP': icon_681,
  'flags/ABW': icon_682,
  'flags/AFG': icon_683,
  'flags/AGO': icon_684,
  'flags/AIA': icon_685,
  'flags/ALA': icon_686,
  'flags/ALB': icon_687,
  'flags/AND': icon_688,
  'flags/ANT': icon_689,
  'flags/ARE': icon_690,
  'flags/ARG': icon_691,
  'flags/ARM': icon_692,
  'flags/ATG': icon_693,
  'flags/AUS': icon_694,
  'flags/austria': icon_695,
  'flags/AUT': icon_696,
  'flags/AZE': icon_697,
  'flags/BDI': icon_698,
  'flags/BEL': icon_699,
  'flags/BEN': icon_700,
  'flags/BFA': icon_701,
  'flags/BGD': icon_702,
  'flags/BGR': icon_703,
  'flags/BHR': icon_704,
  'flags/BHS': icon_705,
  'flags/BIH': icon_706,
  'flags/BLR': icon_707,
  'flags/BLZ': icon_708,
  'flags/BMU': icon_709,
  'flags/BOL': icon_710,
  'flags/BRA': icon_711,
  'flags/BRB': icon_712,
  'flags/BRN': icon_713,
  'flags/BTN': icon_714,
  'flags/BWA': icon_715,
  'flags/CAN': icon_716,
  'flags/CHE': icon_717,
  'flags/CHL': icon_718,
  'flags/CHN': icon_719,
  'flags/CIV': icon_720,
  'flags/CMR': icon_721,
  'flags/COD': icon_722,
  'flags/COG': icon_723,
  'flags/COL': icon_724,
  'flags/COM': icon_725,
  'flags/CRI': icon_726,
  'flags/CUB': icon_727,
  'flags/CYM': icon_728,
  'flags/CYP': icon_729,
  'flags/CZE': icon_730,
  'flags/czech_republic': icon_731,
  'flags/DEU': icon_732,
  'flags/DJI': icon_733,
  'flags/DMA': icon_734,
  'flags/DNK': icon_735,
  'flags/DOM': icon_736,
  'flags/DZA': icon_737,
  'flags/ECU': icon_738,
  'flags/EGY': icon_739,
  'flags/ERI': icon_740,
  'flags/ESP': icon_741,
  'flags/EST': icon_742,
  'flags/ETH': icon_743,
  'flags/EUE': icon_744,
  'flags/FIN': icon_745,
  'flags/FJI': icon_746,
  'flags/FLK': icon_747,
  'flags/FRA': icon_748,
  'flags/FSM': icon_749,
  'flags/GAB': icon_750,
  'flags/GBR': icon_751,
  'flags/GEO': icon_752,
  'flags/germany': icon_753,
  'flags/GGY': icon_754,
  'flags/GHA': icon_755,
  'flags/GIB': icon_756,
  'flags/GIN': icon_757,
  'flags/GMB': icon_758,
  'flags/GNB': icon_759,
  'flags/GNQ': icon_760,
  'flags/GRC': icon_761,
  'flags/GRD': icon_762,
  'flags/GTM': icon_763,
  'flags/GUY': icon_764,
  'flags/HKG': icon_765,
  'flags/HND': icon_766,
  'flags/HRV': icon_767,
  'flags/HTI': icon_768,
  'flags/HUN': icon_769,
  'flags/IDN': icon_770,
  'flags/IMN': icon_771,
  'flags/IND': icon_772,
  'flags/IRL': icon_773,
  'flags/IRN': icon_774,
  'flags/IRQ': icon_775,
  'flags/ISL': icon_776,
  'flags/ISR': icon_777,
  'flags/ITA': icon_778,
  'flags/JAM': icon_779,
  'flags/JEY': icon_780,
  'flags/JOR': icon_781,
  'flags/JPN': icon_782,
  'flags/KAZ': icon_783,
  'flags/KEN': icon_784,
  'flags/KGZ': icon_785,
  'flags/KHM': icon_786,
  'flags/KNA': icon_787,
  'flags/KOR': icon_788,
  'flags/KWT': icon_789,
  'flags/LAO': icon_790,
  'flags/LBN': icon_791,
  'flags/LBR': icon_792,
  'flags/LBY': icon_793,
  'flags/LCA': icon_794,
  'flags/LIE': icon_795,
  'flags/LKA': icon_796,
  'flags/LSO': icon_797,
  'flags/LTU': icon_798,
  'flags/LUX': icon_799,
  'flags/LVA': icon_800,
  'flags/MAC': icon_801,
  'flags/MAR': icon_802,
  'flags/MCO': icon_803,
  'flags/MDA': icon_804,
  'flags/MDG': icon_805,
  'flags/MDV': icon_806,
  'flags/MEX': icon_807,
  'flags/MKD': icon_808,
  'flags/MLI': icon_809,
  'flags/MLT': icon_810,
  'flags/MMR': icon_811,
  'flags/MNE': icon_812,
  'flags/MNG': icon_813,
  'flags/MOZ': icon_814,
  'flags/MRT': icon_815,
  'flags/MSR': icon_816,
  'flags/MUS': icon_817,
  'flags/MWI': icon_818,
  'flags/MYS': icon_819,
  'flags/NAM': icon_820,
  'flags/NER': icon_821,
  'flags/NGA': icon_822,
  'flags/NIC': icon_823,
  'flags/NLD': icon_824,
  'flags/NOR': icon_825,
  'flags/NPL': icon_826,
  'flags/NZL': icon_827,
  'flags/OMN': icon_828,
  'flags/PAK': icon_829,
  'flags/PAN': icon_830,
  'flags/PER': icon_831,
  'flags/PHL': icon_832,
  'flags/PLW': icon_833,
  'flags/PNG': icon_834,
  'flags/POL': icon_835,
  'flags/PRI': icon_836,
  'flags/PRK': icon_837,
  'flags/PRT': icon_838,
  'flags/PRY': icon_839,
  'flags/PYF': icon_840,
  'flags/QAT': icon_841,
  'flags/RCA': icon_842,
  'flags/ROU': icon_843,
  'flags/RSM': icon_844,
  'flags/RUS': icon_845,
  'flags/RWA': icon_846,
  'flags/SAU': icon_847,
  'flags/SDN': icon_848,
  'flags/SEN': icon_849,
  'flags/SGP': icon_850,
  'flags/SHN': icon_851,
  'flags/SLB': icon_852,
  'flags/SLE': icon_853,
  'flags/SLV': icon_854,
  'flags/SOM': icon_855,
  'flags/SRB': icon_856,
  'flags/SSD': icon_857,
  'flags/STP': icon_858,
  'flags/SUR': icon_859,
  'flags/SVK': icon_860,
  'flags/SVN': icon_861,
  'flags/SWE': icon_862,
  'flags/SWZ': icon_863,
  'flags/SYC': icon_864,
  'flags/SYR': icon_865,
  'flags/TCA': icon_866,
  'flags/TCD': icon_867,
  'flags/TGO': icon_868,
  'flags/THA': icon_869,
  'flags/TJK': icon_870,
  'flags/TKM': icon_871,
  'flags/TMP': icon_872,
  'flags/TON': icon_873,
  'flags/TTO': icon_874,
  'flags/TUN': icon_875,
  'flags/TUR': icon_876,
  'flags/TWN': icon_877,
  'flags/TZA': icon_878,
  'flags/UGA': icon_879,
  'flags/UKR': icon_880,
  'flags/URY': icon_881,
  'flags/USA': icon_882,
  'flags/UZB': icon_883,
  'flags/VCT': icon_884,
  'flags/VEN': icon_885,
  'flags/VGB': icon_886,
  'flags/VNM': icon_887,
  'flags/VUT': icon_888,
  'flags/WSM': icon_889,
  'flags/YEM': icon_890,
  'flags/ZAF': icon_891,
  'flags/ZMB': icon_892,
  'flags/ZWE': icon_893,
  germany: icon_894,
  'hardware/desktop_mac': icon_899,
  'hardware/keyboard_arrow_down': icon_909,
  'hardware/keyboard_arrow_left': icon_910,
  'hardware/keyboard_arrow_right': icon_911,
  'hardware/keyboard_arrow_up': icon_912,
  'hardware/security': icon_933,
  icon_placeholder: icon_945,
  'image/add_a_photo': icon_946,
  'image/add_photo_alternate': icon_950,
  'image/blur_off': icon_955,
  'image/camera_alt': icon_967,
  'image/edit': icon_995,
  'image/filter_2': icon_1003,
  'image/image': icon_1037,
  'image/lens': icon_1042,
  'image/photo_camera': icon_1068,
  'image/photo': icon_1074,
  'image/remove_red_eye': icon_1077,
  'image/photo_album': icon_1083,
  'maps/directions_car': icon_1115,
  'maps/fastfood': icon_1125,
  'maps/local_mall': icon_1146,
  'maps/local_offer': icon_1148,
  'maps/local_parking': icon_1149,
  'maps/person_pin': icon_1166,
  'maps/place': icon_1168,
  'maps/zoom_out_map': icon_1183,
  'modules/pneu_hotel': pneu_hotel,
  'navigation/apps': icon_1184,
  'navigation/arrow_back_ios': icon_1185,
  'navigation/arrow_back': icon_1186,
  'navigation/arrow_downward': icon_1187,
  'navigation/arrow_drop_down_circle': icon_1188,
  'navigation/arrow_drop_down': icon_1189,
  'navigation/arrow_drop_up': icon_1190,
  'navigation/arrow_forward_ios': icon_1191,
  'navigation/arrow_forward': icon_1192,
  'navigation/arrow_left': icon_1193,
  'navigation/arrow_right': icon_1194,
  'navigation/arrow_upward': icon_1195,
  'navigation/cancel': icon_1196,
  'navigation/cancel_outline': icon_1352,
  'navigation/check': icon_1197,
  'navigation/chevron_left': icon_1198,
  'navigation/chevron_right': icon_1199,
  'navigation/close': icon_1200,
  'navigation/expand_less': icon_1201,
  'navigation/expand_more': icon_1202,
  'navigation/first_page': icon_1203,
  'navigation/fullscreen_exit': icon_1204,
  'navigation/fullscreen': icon_1205,
  'navigation/last_page': icon_1206,
  'navigation/menu': icon_1207,
  'navigation/more_horiz': icon_1208,
  'navigation/more_vert': icon_1209,
  'navigation/refresh': icon_1210,
  'navigation/subdirectory_arrow_left': icon_1211,
  'navigation/subdirectory_arrow_right': icon_1212,
  'navigation/unfold_less': icon_1213,
  'navigation/unfold_more': icon_1214,
  'notification/do_disturb': icon_1230,
  'notification/terminal': icon_1231,
  'places/business_center': icon_1278,
  'social/cake': icon_1295,
  'social/domain': icon_1296,
  'social/group': icon_1298,
  'social/people': icon_1310,
  'social/person_add': icon_1311,
  'social/person': icon_1313,
  'social/poll': icon_1315,
  'social/publicon': icon_1316,
  'social/share': icon_1323,
  'toggle/radio_button_checked': icon_1331,
  'toggle/radio_button_unchecked': icon_1332,
  'toggle/star': icon_1338,
  'toggle/tick': icon_1339,
  'toggle/minus': icon_1340,
  'social/notifications': icon_1306,
  upload: icon_1342,
  view: icon_1343,
  viewOff: icon_1344,
  'wizard/danger': wizardDanger,
  'wizard/success': wizardSuccess,
  'wizard/informational': wizardInformational,
  'wizard/warning': wizardWarning,
  fallback: fallbackIcon,
} as const;
