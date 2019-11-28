var class_estimator_interface =
[
    [ "_gps_pos_prev", "dc/d4a/struct_estimator_interface_1_1__gps__pos__prev.html", null ],
    [ "_pos_ref", "dd/d9f/struct_estimator_interface_1_1__pos__ref.html", null ],
    [ "AlphaFilterVector3f", "d5/d73/class_estimator_interface.html#a53a183e5ac17e8250d9650ae394d7ec1", null ],
    [ "EstimatorInterface", "d5/d73/class_estimator_interface.html#ab7d5c2a0a65343fa03b9baea64810e1b", null ],
    [ "~EstimatorInterface", "d5/d73/class_estimator_interface.html#a7c7f3a6ed340322d8637eecd094ca9cb", null ],
    [ "attitude_valid", "d5/d73/class_estimator_interface.html#a4505a5788f11c96899295e69e03fbaeb", null ],
    [ "collect_gps", "d5/d73/class_estimator_interface.html#a78f224ea8fac0a5e39d736e2c4af9fa3", null ],
    [ "collect_imu", "d5/d73/class_estimator_interface.html#a4cfe9b4ec93c240f57807fa55db10612", null ],
    [ "copy_timestamp", "d5/d73/class_estimator_interface.html#ad7df9cfd66225423f89ae1e29f9df553", null ],
    [ "cross_product", "d5/d73/class_estimator_interface.html#a77d05a1f59aa289a8a82dab18d06b815", null ],
    [ "get_accel_bias", "d5/d73/class_estimator_interface.html#a137e031de2ca418aa16ee5530194e3c8", null ],
    [ "get_airspeed_innov", "d5/d73/class_estimator_interface.html#af9e5e668629bcd5f732b816457832a93", null ],
    [ "get_airspeed_innov_var", "d5/d73/class_estimator_interface.html#a64f14563598684945a22c9dadca8bac7", null ],
    [ "get_aux_vel_innov", "d5/d73/class_estimator_interface.html#a1902b18753f766c565514db8f03f5a2a", null ],
    [ "get_baro_sample_delayed", "d5/d73/class_estimator_interface.html#aa9d105ea99f037abe189e58000f015bb", null ],
    [ "get_beta_innov", "d5/d73/class_estimator_interface.html#a7616a3623e15001df429b647ab39dcd3", null ],
    [ "get_beta_innov_var", "d5/d73/class_estimator_interface.html#a34db1c2a8fd86fe1d5247dad52e808d5", null ],
    [ "get_control_mode", "d5/d73/class_estimator_interface.html#ac2316d3bc766f8645f0b2cfe0bea9bb9", null ],
    [ "get_drag_innov", "d5/d73/class_estimator_interface.html#ad04dc013b581e78f95bb14e584184797", null ],
    [ "get_drag_innov_var", "d5/d73/class_estimator_interface.html#a84af926c220b438305f9f528f10ddffe", null ],
    [ "get_dt_imu_avg", "d5/d73/class_estimator_interface.html#a3a02cd2bd3d62fbf0c15c07704d645db", null ],
    [ "get_ekf_ctrl_limits", "d5/d73/class_estimator_interface.html#aae2b45ffa13fddb74ecf6c56ed5047e4", null ],
    [ "get_ekf_gpos_accuracy", "d5/d73/class_estimator_interface.html#a3eca4ea1daca6b3cfe43a9de80ce40ad", null ],
    [ "get_ekf_lpos_accuracy", "d5/d73/class_estimator_interface.html#a106489929fdf4d351ee1d342c469b69d", null ],
    [ "get_ekf_origin", "d5/d73/class_estimator_interface.html#aed9af80cb725e0f3d5a0649751c9b531", null ],
    [ "get_ekf_soln_status", "d5/d73/class_estimator_interface.html#a275501bec1536d3dc7d24af77dddbfc4", null ],
    [ "get_ekf_vel_accuracy", "d5/d73/class_estimator_interface.html#a33a83b80d5c4c5ed608e701fbd3cb4ac", null ],
    [ "get_ev2ekf_quaternion", "d5/d73/class_estimator_interface.html#a5ba6e47def01c92a520f85176caa3c28", null ],
    [ "get_filter_fault_status", "d5/d73/class_estimator_interface.html#ac05b4a7ed3c40f3dd59459822daaa008", null ],
    [ "get_flow_innov", "d5/d73/class_estimator_interface.html#a6fd187d7d5e7d65f0658cdc70a2a1127", null ],
    [ "get_flow_innov_var", "d5/d73/class_estimator_interface.html#a2a69d83754c3073065091c4d83cf1c82", null ],
    [ "get_gps_check_status", "d5/d73/class_estimator_interface.html#a53637b62ed1f9561bf15ba2eab006993", null ],
    [ "get_gps_drift_metrics", "d5/d73/class_estimator_interface.html#a59791a325709d050e09c42b27bd793d9", null ],
    [ "get_gyro_bias", "d5/d73/class_estimator_interface.html#a954a7c862cf70d46d888f78cebda184f", null ],
    [ "get_hagl_innov", "d5/d73/class_estimator_interface.html#af5a0f2859108870e7b3e1a2a99996275", null ],
    [ "get_hagl_innov_var", "d5/d73/class_estimator_interface.html#aa736ed52f41d20b41047fce6d9d84737", null ],
    [ "get_heading_innov", "d5/d73/class_estimator_interface.html#a8b7c155ef63a20d9b31a7c6a70800d5a", null ],
    [ "get_heading_innov_var", "d5/d73/class_estimator_interface.html#accb7710bd868966ee9848cb83245da67", null ],
    [ "get_imu_sample_delayed", "d5/d73/class_estimator_interface.html#a02a87febf5a4c3b1784ee5e5e8eb7ee0", null ],
    [ "get_imu_vibe_metrics", "d5/d73/class_estimator_interface.html#a5c7295dafc974d2dcdd44bfa844ffa82", null ],
    [ "get_in_air_status", "d5/d73/class_estimator_interface.html#a96b6172ab9a4a245f9c5e59b2fc350a1", null ],
    [ "get_innovation_test_status", "d5/d73/class_estimator_interface.html#abd99e1718a120ee3867e69b5078a0786", null ],
    [ "get_mag_decl_deg", "d5/d73/class_estimator_interface.html#af7eeb4ddde128228555d911e5fb3382b", null ],
    [ "get_mag_innov", "d5/d73/class_estimator_interface.html#a4377caa5372557454f030472b71f902e", null ],
    [ "get_mag_innov_var", "d5/d73/class_estimator_interface.html#acfc55ab35d000ee611745d3123ec1549", null ],
    [ "get_output_tracking_error", "d5/d73/class_estimator_interface.html#ad0a1899f10d547e0c15380b7929fd8ef", null ],
    [ "get_pos_d_deriv", "d5/d73/class_estimator_interface.html#a0ed123528133d5d077345a2f70623f3b", null ],
    [ "get_pos_var", "d5/d73/class_estimator_interface.html#a975bc887d30af68d241a11812612f64d", null ],
    [ "get_posD_reset", "d5/d73/class_estimator_interface.html#aedbd6a5cd68d57d190e7b482861559ae", null ],
    [ "get_position", "d5/d73/class_estimator_interface.html#a25687fd2408ef89d521e0e0e11ff6337", null ],
    [ "get_posNE_reset", "d5/d73/class_estimator_interface.html#a39dda20e94782904b299774fe4fa75ab", null ],
    [ "get_quat_reset", "d5/d73/class_estimator_interface.html#afe7f8627e8848d7c4c4c46a9de4e4522", null ],
    [ "get_quaternion", "d5/d73/class_estimator_interface.html#a0330cd71045edef362651ad87006ab3a", null ],
    [ "get_state_delayed", "d5/d73/class_estimator_interface.html#aa01a35a00a958f08b6c1d7f09889c988", null ],
    [ "get_terrain_valid", "d5/d73/class_estimator_interface.html#acf060bd8fde9f30deb3071a169a7dee4", null ],
    [ "get_terrain_vert_pos", "d5/d73/class_estimator_interface.html#aed98545148de1306d77bc52b80439e9b", null ],
    [ "get_true_airspeed", "d5/d73/class_estimator_interface.html#a171882d4a7f477c9c893dbbb68dc07db", null ],
    [ "get_vel_deriv_ned", "d5/d73/class_estimator_interface.html#a33e46661fa00386adea528084fdcfac1", null ],
    [ "get_vel_pos_innov", "d5/d73/class_estimator_interface.html#a1ca2f62f2796360bf174978e17fbd32a", null ],
    [ "get_vel_pos_innov_var", "d5/d73/class_estimator_interface.html#a0b91cd343144b64474eeca1fa0892c78", null ],
    [ "get_vel_var", "d5/d73/class_estimator_interface.html#a5496e37f750d9680b855d9a0470f3c86", null ],
    [ "get_velD_reset", "d5/d73/class_estimator_interface.html#a9588e691229e9a3aa13afbb0524f8995", null ],
    [ "get_velNE_reset", "d5/d73/class_estimator_interface.html#abf53c21fe3fcbe7aa04a8aa6d7a9596a", null ],
    [ "get_velocity", "d5/d73/class_estimator_interface.html#aef72801dade135291cff5f511c0d26d1", null ],
    [ "get_wind_status", "d5/d73/class_estimator_interface.html#a5d51c21019c37180b52e07a7aa7d1da0", null ],
    [ "get_wind_velocity", "d5/d73/class_estimator_interface.html#a1230b85d2d028fa029aa5747be8a3548", null ],
    [ "get_wind_velocity_var", "d5/d73/class_estimator_interface.html#a8f1cb1992c9bca3865e54b04ab629f6c", null ],
    [ "getHaglInnov", "d5/d73/class_estimator_interface.html#abdb898bc450cc36d76f11c5b812165ba", null ],
    [ "getHaglInnovVar", "d5/d73/class_estimator_interface.html#a8025e1a6d6487c8db940d240719e4f3a", null ],
    [ "getParamHandle", "d5/d73/class_estimator_interface.html#aa47f9dbbf6b2e5fd9ea4835f787cf876", null ],
    [ "getTerrainVertPos", "d5/d73/class_estimator_interface.html#a8be0b72c4304464b0ddc260d9f614deb", null ],
    [ "global_position_is_valid", "d5/d73/class_estimator_interface.html#ac886d9c934efcb13069c5ea1bcc86aa1", null ],
    [ "inertial_dead_reckoning", "d5/d73/class_estimator_interface.html#a57c1d2a19628fa4e923db31de1536695", null ],
    [ "init", "d5/d73/class_estimator_interface.html#a7e56b350dcb27f4b212752a946085f1d", null ],
    [ "initialise_interface", "d5/d73/class_estimator_interface.html#a53b3c14143f8316f60e811af7079f875", null ],
    [ "isTerrainEstimateValid", "d5/d73/class_estimator_interface.html#acf88bbf467411cf652669ae8cde88288", null ],
    [ "isVehicleAtRest", "d5/d73/class_estimator_interface.html#ac5a20a4654abd3bac173db005b3c1794", null ],
    [ "local_position_is_valid", "d5/d73/class_estimator_interface.html#a5cba5d00dd7b8f7cf370baf5957f5283", null ],
    [ "print_status", "d5/d73/class_estimator_interface.html#aad0ee4fd1300585a2411c53f6287063b", null ],
    [ "quat_to_invrotmat", "d5/d73/class_estimator_interface.html#abd942d9d704d30a740da35a2494eb8e2", null ],
    [ "reset", "d5/d73/class_estimator_interface.html#a1869cf5dc9039c022526cabc4e0a43da", null ],
    [ "reset_imu_bias", "d5/d73/class_estimator_interface.html#a512b060ee9058f54765424af12cd1a29", null ],
    [ "resetStates", "d5/d73/class_estimator_interface.html#a592401cdb3689fd0e01de37328393ec7", null ],
    [ "resetStatesAndCovariances", "d5/d73/class_estimator_interface.html#acf48410b3b512eaec6c9d0cecefd26fc", null ],
    [ "set_air_density", "d5/d73/class_estimator_interface.html#ace099116f006168401f69df05c39c1ee", null ],
    [ "set_fuse_beta_flag", "d5/d73/class_estimator_interface.html#a5cd8c1ab99ed6482b9db8b181765ea50", null ],
    [ "set_gnd_effect_flag", "d5/d73/class_estimator_interface.html#aec8e5538693f2607783d47bf0fe0523a", null ],
    [ "set_in_air_status", "d5/d73/class_estimator_interface.html#ae2c3325e23d02baaf42b24d5df64c3f4", null ],
    [ "set_is_fixed_wing", "d5/d73/class_estimator_interface.html#a54e9043be5f5324e64e3db7fe2c7cac4", null ],
    [ "set_optical_flow_limits", "d5/d73/class_estimator_interface.html#a0eee44c8b4f208d925af99c7192fc152", null ],
    [ "set_rangefinder_limits", "d5/d73/class_estimator_interface.html#afc8cc505ff817579077ad930f5b79310", null ],
    [ "setAirspeedData", "d5/d73/class_estimator_interface.html#a1cd35ad4c8a236da1877655513af4c46", null ],
    [ "setAuxVelData", "d5/d73/class_estimator_interface.html#a4b3e46218c22b4f2d4b1f140c28152bb", null ],
    [ "setBaroData", "d5/d73/class_estimator_interface.html#aaf01b2208d0de5ab63d732b3a033019b", null ],
    [ "setExtVisionData", "d5/d73/class_estimator_interface.html#a280d58c45341e2d3af8aebbc3de8ca87", null ],
    [ "setGpsData", "d5/d73/class_estimator_interface.html#a898f1023c90441e214a75f9f70162420", null ],
    [ "setIMUData", "d5/d73/class_estimator_interface.html#ac8386aea14d0ec18f2e44925cb692dce", null ],
    [ "setIMUData", "d5/d73/class_estimator_interface.html#a3fadf9a1ff249715879dc23f72691d9e", null ],
    [ "setMagData", "d5/d73/class_estimator_interface.html#a8ce8ba0aa45e25f84b7e9bbf6c35a46c", null ],
    [ "setOpticalFlowData", "d5/d73/class_estimator_interface.html#a2312067aeee1ef9b280a8cf3ce425e1b", null ],
    [ "setRangeData", "d5/d73/class_estimator_interface.html#a419da613e23daa2ed4408d68cf8ba85a", null ],
    [ "unallocate_buffers", "d5/d73/class_estimator_interface.html#a0e12e270a215bc2b587ade39cb19e018", null ],
    [ "update", "d5/d73/class_estimator_interface.html#a8a6d878a023a5af3208f300dc5cc81c6", null ],
    [ "_air_density", "d5/d73/class_estimator_interface.html#a8bd81a0b0dc2450b98e841e7fe0e2cf8", null ],
    [ "_airspeed_buffer", "d5/d73/class_estimator_interface.html#a9270ea3ba051c2973e76df33f794cd95", null ],
    [ "_airspeed_buffer_fail", "d5/d73/class_estimator_interface.html#abd25a2263e3f69793503448186662e91", null ],
    [ "_airspeed_sample_delayed", "d5/d73/class_estimator_interface.html#a1f61367e42a155bede9f113e519d7c33", null ],
    [ "_auxvel_buffer", "d5/d73/class_estimator_interface.html#a1f030fbdf058c8fbfa33789cf56fb771", null ],
    [ "_auxvel_buffer_fail", "d5/d73/class_estimator_interface.html#a40df5ce5412c22fef9be4049e71808ce", null ],
    [ "_auxvel_sample_delayed", "d5/d73/class_estimator_interface.html#a253079add57ad1984e690c785f084cab", null ],
    [ "_baro_buffer", "d5/d73/class_estimator_interface.html#ac58879665aac26cc80a1eb27d0762d3d", null ],
    [ "_baro_buffer_fail", "d5/d73/class_estimator_interface.html#adc9d596f19044c03ab7e2e194b7143e8", null ],
    [ "_baro_sample_delayed", "d5/d73/class_estimator_interface.html#ae7447dbee45b74bcf68d101be65d2432", null ],
    [ "_beta_test_ratio", "d5/d73/class_estimator_interface.html#a6a9e3de7465478a138290ab5b0882787", null ],
    [ "_control_status", "d5/d73/class_estimator_interface.html#a24bb0c8f59912c789fc7e3322b1b4345", null ],
    [ "_control_status_prev", "d5/d73/class_estimator_interface.html#a45df8a26b6eb9e26cfedcaff47adb094", null ],
    [ "_deadreckon_time_exceeded", "d5/d73/class_estimator_interface.html#ae1a18fdcc6569aa4479ba3e0d0b5ee5d", null ],
    [ "_delta_ang_prev", "d5/d73/class_estimator_interface.html#aa3f4e541339e1fc5a73618a86207c6a6", null ],
    [ "_delta_vel_prev", "d5/d73/class_estimator_interface.html#a18de11bdbde8b1b2ae0349f087a871ed", null ],
    [ "_drag_buffer", "d5/d73/class_estimator_interface.html#a1d0b4d1efa4815df257920b751f98278", null ],
    [ "_drag_buffer_fail", "d5/d73/class_estimator_interface.html#aeff39a5b56a2c1c4155f98bb2def9960", null ],
    [ "_drag_down_sampled", "d5/d73/class_estimator_interface.html#af78b8e8c1a5414d0ac3d3b0030cdc9fc", null ],
    [ "_drag_sample_count", "d5/d73/class_estimator_interface.html#a88c60019418ac714f1029ab2a946f7c5", null ],
    [ "_drag_sample_delayed", "d5/d73/class_estimator_interface.html#a6cd1e0475609d349533567dc5440172a", null ],
    [ "_drag_sample_time_dt", "d5/d73/class_estimator_interface.html#a85a278d4844739d3156c1ea0761b9c2b", null ],
    [ "_drag_test_ratio", "d5/d73/class_estimator_interface.html#ab213e791b95a055bf657285703ecbd7a", null ],
    [ "_dt_imu_avg", "d5/d73/class_estimator_interface.html#a2980d24c0d2f80b1f23e434af48b118b", null ],
    [ "_ev_buffer_fail", "d5/d73/class_estimator_interface.html#ab068a886554be787d0dc8646079d6207", null ],
    [ "_ev_sample_delayed", "d5/d73/class_estimator_interface.html#a51778f66fee65e4fa6f8e83c500536e2", null ],
    [ "_ext_vision_buffer", "d5/d73/class_estimator_interface.html#a8745ed95458c5a9b3986f09d2a5bea17", null ],
    [ "_fault_status", "d5/d73/class_estimator_interface.html#acf8f83c68da562a29d5cf618a7740ac3", null ],
    [ "_flow_buffer", "d5/d73/class_estimator_interface.html#a57a2074633c9a10ab14375398d9f298f", null ],
    [ "_flow_buffer_fail", "d5/d73/class_estimator_interface.html#a3b29c1a2628c02d4295fcf1f43711bf9", null ],
    [ "_flow_max_distance", "d5/d73/class_estimator_interface.html#af6f6f1e2351733824c933a8d8ea01017", null ],
    [ "_flow_max_rate", "d5/d73/class_estimator_interface.html#afc7d1dd32a354e8d46ca14a23795c646", null ],
    [ "_flow_min_distance", "d5/d73/class_estimator_interface.html#adf2e835788c00c62b165b67a326ecf76", null ],
    [ "_flow_sample_delayed", "d5/d73/class_estimator_interface.html#a4f903e36478837e1bf52bf3f5b48c800", null ],
    [ "_gps_alt_prev", "d5/d73/class_estimator_interface.html#a36fe223ebad5a470abd39d46297396ee", null ],
    [ "_gps_buffer", "d5/d73/class_estimator_interface.html#a91c1564a14e90bdce274e30478f59129", null ],
    [ "_gps_buffer_fail", "d5/d73/class_estimator_interface.html#ac79d3444a67cba010d21cc1ad233f356", null ],
    [ "_gps_drift_metrics", "d5/d73/class_estimator_interface.html#a40cd2c37f261550390b3438a9d6404ab", null ],
    [ "_gps_drift_updated", "d5/d73/class_estimator_interface.html#ad9def1771e506a0804b6b2e121b98d5f", null ],
    [ "_gps_origin_eph", "d5/d73/class_estimator_interface.html#a1a367526e6142912b0e8dea412d9bf06", null ],
    [ "_gps_origin_epv", "d5/d73/class_estimator_interface.html#a4687cc7a19ce0917dcc25f7a7cf9d57e", null ],
    [ "_gps_sample_delayed", "d5/d73/class_estimator_interface.html#a23d9a9cd62de1b98c3279879509717c7", null ],
    [ "_gps_speed_valid", "d5/d73/class_estimator_interface.html#a7276ca3e906bdb1f94df1a16dc661be0", null ],
    [ "_gps_yaw_offset", "d5/d73/class_estimator_interface.html#a3b55463555dac959514121f3231df46a", null ],
    [ "_imu_buffer", "d5/d73/class_estimator_interface.html#ab7162f3146f7c1275f452c02bb7c3bf5", null ],
    [ "_imu_buffer_length", "d5/d73/class_estimator_interface.html#a3b92f6194878d0175005f98ee7308225", null ],
    [ "_imu_sample_delayed", "d5/d73/class_estimator_interface.html#acd1d3096fedb2e7fda208756eca6f4a5", null ],
    [ "_imu_sample_new", "d5/d73/class_estimator_interface.html#a2412ba2b606ba984b0b79a7d22269cb7", null ],
    [ "_imu_updated", "d5/d73/class_estimator_interface.html#afb388dc54f27f6597e6b829e8a25eef7", null ],
    [ "_initialised", "d5/d73/class_estimator_interface.html#aef3eab3ec00d4eec159d352a1421b5fb", null ],
    [ "_innov_check_fail_status", "d5/d73/class_estimator_interface.html#aa89f078f9811c46243c5f1cef4627f23", null ],
    [ "_is_dead_reckoning", "d5/d73/class_estimator_interface.html#a3389e95e9573a0b32c6e77fbb824d79c", null ],
    [ "_is_wind_dead_reckoning", "d5/d73/class_estimator_interface.html#ae92abda4e7a30131651da48d719e2a63", null ],
    [ "_mag_buffer", "d5/d73/class_estimator_interface.html#aacae8c86fe2681eead96167af685f7b6", null ],
    [ "_mag_buffer_fail", "d5/d73/class_estimator_interface.html#ab5b1a0af096b534a8ea3686624628352", null ],
    [ "_mag_declination_gps", "d5/d73/class_estimator_interface.html#a04d02b0cf920236fbafdefcf8a7d7103", null ],
    [ "_mag_inclination_gps", "d5/d73/class_estimator_interface.html#aee8530e8bb14f92a0e33d7e3a35c9215", null ],
    [ "_mag_sample_delayed", "d5/d73/class_estimator_interface.html#aebfe470fa3e331559248f516f03833e1", null ],
    [ "_mag_strength_gps", "d5/d73/class_estimator_interface.html#ae173838ecc348cb7c9b4f8cc52e710b0", null ],
    [ "_mag_test_ratio", "d5/d73/class_estimator_interface.html#af7ecd4803714392e76e827be5427c1fa", null ],
    [ "_min_obs_interval_us", "d5/d73/class_estimator_interface.html#aa0c604a7023e6c2559c294c96826f513", null ],
    [ "_NED_origin_initialised", "d5/d73/class_estimator_interface.html#ae3ac54a69a49c702c274e67bfdb0f167", null ],
    [ "_obs_buffer_length", "d5/d73/class_estimator_interface.html#a39e64097e79270c36fd8441bdf90a3cd", null ],
    [ "_output_buffer", "d5/d73/class_estimator_interface.html#a75a51fc86ae1f634bf170601118d5cd5", null ],
    [ "_output_new", "d5/d73/class_estimator_interface.html#a0b4782117f79b927b89ee609bee904a9", null ],
    [ "_output_sample_delayed", "d5/d73/class_estimator_interface.html#a30dcf43bb7529ba4f3e047283bbf6221", null ],
    [ "_output_vert_buffer", "d5/d73/class_estimator_interface.html#af36985664e441d0d54d5491c49e49903", null ],
    [ "_output_vert_delayed", "d5/d73/class_estimator_interface.html#a31171732d4942716686f8bd6842c595e", null ],
    [ "_output_vert_new", "d5/d73/class_estimator_interface.html#a1f4df30bf9a496529b800bba6c9e10e2", null ],
    [ "_params", "d5/d73/class_estimator_interface.html#ae214374497f6c641a8d9a350149ec4bf", null ],
    [ "_R_to_earth_now", "d5/d73/class_estimator_interface.html#ada14142b03ebd4ca54c5b9d2dc25b7a7", null ],
    [ "_range_buffer", "d5/d73/class_estimator_interface.html#ac971c31a9ec81f92aae3ca317406a907", null ],
    [ "_range_buffer_fail", "d5/d73/class_estimator_interface.html#ae8e5229b582147b0675d4f3688f1c9a8", null ],
    [ "_range_sample_delayed", "d5/d73/class_estimator_interface.html#a33fe751eca450ee9595c36bae1aa49e6", null ],
    [ "_rng_valid_max_val", "d5/d73/class_estimator_interface.html#a1f37a5183a36eb3d772b5817998acf42", null ],
    [ "_rng_valid_min_val", "d5/d73/class_estimator_interface.html#abb6ebe04b53b135b98085c9b64b3344a", null ],
    [ "_tas_test_ratio", "d5/d73/class_estimator_interface.html#ac22b990a7b49d389dc3cccca887e46d4", null ],
    [ "_terr_test_ratio", "d5/d73/class_estimator_interface.html#a89959cfcb8c1138ca24b9e72ef054977", null ],
    [ "_time_last_airspeed", "d5/d73/class_estimator_interface.html#a9a3e7f69f0a87cda27511f0c3f43ee17", null ],
    [ "_time_last_auxvel", "d5/d73/class_estimator_interface.html#a7a8ee35a7977f4015a690afd3756e092", null ],
    [ "_time_last_baro", "d5/d73/class_estimator_interface.html#a63a651bc9a523ea1ff2ee36b64ea4371", null ],
    [ "_time_last_ext_vision", "d5/d73/class_estimator_interface.html#a98ac41b5f9da84890e537c147eb2fb0a", null ],
    [ "_time_last_gnd_effect_on", "d5/d73/class_estimator_interface.html#a2f98023396dbf6c80dd875ea777b3380", null ],
    [ "_time_last_gps", "d5/d73/class_estimator_interface.html#abe46b72e1e43a29437379d38434e5d12", null ],
    [ "_time_last_imu", "d5/d73/class_estimator_interface.html#a7b85b1cd0f76c45b76c3830f30104a01", null ],
    [ "_time_last_mag", "d5/d73/class_estimator_interface.html#aac07251b62241b3432a3b6080a866cc1", null ],
    [ "_time_last_move_detect_us", "d5/d73/class_estimator_interface.html#abd6904761beccf5c69d6f0065cee18f4", null ],
    [ "_time_last_optflow", "d5/d73/class_estimator_interface.html#a17375123aa544e547d5b591510765ca8", null ],
    [ "_time_last_range", "d5/d73/class_estimator_interface.html#a60d7fb42c981890bdca36ee644bdfa35", null ],
    [ "_vehicle_at_rest", "d5/d73/class_estimator_interface.html#a57afae3bd9397ec456ada9971205b7b0", null ],
    [ "_vel_deriv_ned", "d5/d73/class_estimator_interface.html#a35622430c067f857efd9ccf4d5ad0b9b", null ],
    [ "_vel_imu_rel_body_ned", "d5/d73/class_estimator_interface.html#a51f22096379f75e3e00b810ba57f476b", null ],
    [ "_vel_pos_test_ratio", "d5/d73/class_estimator_interface.html#a6c4ed63e92544d45afde24c12a9930a7", null ],
    [ "_vibe_metrics", "d5/d73/class_estimator_interface.html#a2e6b80bd37ecfe115aa72c913c5ad1b5", null ],
    [ "_yaw_test_ratio", "d5/d73/class_estimator_interface.html#a996e72fed25c3f5c8fdd0f031914cdd7", null ],
    [ "FILTER_UPDATE_PERIOD_MS", "d5/d73/class_estimator_interface.html#a6bc42b388dfdc18be7f837605d69061d", null ],
    [ "FILTER_UPDATE_PERIOD_S", "d5/d73/class_estimator_interface.html#a784f8cb858c7842492298da42b89c673", null ]
];