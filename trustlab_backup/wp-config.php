<?php
define( 'WP_CACHE', false /* Modified by NitroPack */ );



//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'i8861848_wp1' );

/** Database username */
define( 'DB_USER', 'i8861848_wp1' );

/** Database password */
define( 'DB_PASSWORD', 'D.vbdlup0Ug3Y3P1gA401' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'C4VZLKzwPo2JS9mjkBKShU9OB0eIFV1zxzv6dAB6IAFed0PJ50JEUvpwyXaJeWVT');
define('SECURE_AUTH_KEY',  'BjpB9vB2L91SahIly1vcOttkPvL3yEiBcV6aH1FBuPhJCdiX0euqlAt8wTSqbKST');
define('LOGGED_IN_KEY',    'UxCT45FFng3DbMRSVhidT5YXXCvjiynVk0NcfXHkvoTabeOl5kV77vmlQTvioOYc');
define('NONCE_KEY',        'VqQE5gCmcaVEhC3KrzZlTg4iHVSlceJgaATBcNNMN8YdkbuUxeenxW5sTFlj7zDd');
define('AUTH_SALT',        '39agJRLG9UfBeZZsmOeSb3323nHnIpqnblE7dAEVeevxGWFKfhZwIdmUKsnRxdK9');
define('SECURE_AUTH_SALT', 'nJuNwt0C7UeQTN44COW1js4SOHTShPIeJkYqZ5dfLIXhgFjake12JguFSp5zzemW');
define('LOGGED_IN_SALT',   'vDhuuvJsM20NqDAK5fy8dv4mPRK6FwKe4CiReha8hr3GPQb7zC17Q6TSK6G1D92W');
define('NONCE_SALT',       'Rzw23bkjjz0GF2Vtx0dVEDCjHCnDwp3ryCgi1WmPxTTi4vTR3LxyjiDgdfyWuAnt');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');
define('FS_CHMOD_DIR',0755);
define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
