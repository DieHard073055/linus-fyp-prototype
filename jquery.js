/*!

          fn = function( elem, key, value ) {

      i = 0,
          markFunction(function( seed, matches ) {
      temp = condense( matcherOut, postMap );
    firingIndex,


          i = options.length;
        // when an event is called after a page has unloaded
    // Support: Chrome 23+, Safari?
        data = selector;

        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
  toggle: function( state ) {
        style.removeAttribute( "filter" );
    processData: true,

        send: function( headers, complete ) {
      });
};
 * jQuery JavaScript Library v1.10.2
    // Trigger any bound ready events
            return bulk.call( jQuery( elem ), value );
  function cache( key, value ) {
      aup = a.parentNode,
            var idx,
      postFilter( temp, [], context, xml );
    // First callback to fire (used internally by add and fireWith)
  // Run tests that need a body at doc ready
  return true;

        return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
    // Target should not be a text node (#504, #13143)
        selector = undefined;
  before: function() {

    if ( typeof state === "boolean" ) {

    async: true,
      // Set data for the fake xhr object

    });

 * http://jquery.com/
    if ( jQuery.fn.trigger ) {
          };
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
      bup = b.parentNode,
              matched = fn( seed, argument ),

    firingStart,
  jQuery(function() {
}
        while ( i-- ) {
          jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
    if ( event.target.nodeType === 3 ) {
      }
    return this.domManip( arguments, function( elem ) {
      // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
      return state ? this.show() : this.hide();
        // if there is no filter style applied in a css rule or unset inline opacity, we are done
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      jqXHR.status = status;
          // Get a new xhr
  }
jQuery.fx.speeds = {
 *
      jQuery( document ).trigger("ready").off("ready");
        }
    if ( keys.push( key += " " ) > Expr.cacheLength ) {
      ap = [ a ],
              i = matched.length;
      // Un-match failing elements by moving them back to matcherIn
    // Actual callback list
    var container, marginDiv, tds,
jQuery.extend({
          option = options[ i ];
          undefined;
      event.target = event.target.parentNode;
    }
      if ( this.parentNode ) {
      destElements = getAll( clone );
    }
        if ( value === "" || currentStyle && !currentStyle.filter ) {
    /*
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";
          var handle, i,

  slow: 600,
 * Includes Sizzle.js
    }
      }
      // Only keep the most recent entries
      bp = [ b ];
            while ( i-- ) {
      i = temp.length;
    list = [],
      divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
  queue: function( elem, type, data ) {
          if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
      };
    }
    if ( fn === false ) {
        this.parentNode.insertBefore( elem, this );
      srcElements = getAll( elem );

          return;
    timeout: 0,

            xhr = s.xhr();
  // height/width overflow pass
  fast: 200,
 * http://sizzlejs.com/
  },

      delete cache[ keys.shift() ];

              idx = indexOf.call( seed, matched[i] );
      while ( i-- ) {
    // Stack of fire calls for repeatable lists
      body = document.getElementsByTagName("body")[0];
    var queue;
            optionSet = true;
      // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events

      fn = returnFalse;
      }

    return this.each(function() {
        }
    data: null,
      // Success/Error

  if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
  // Default speed
 *

      if ( fn ) {
    }
    // Exit early if the nodes are identical
              seed[ idx ] = !( matches[ idx ] = matched[i] );
        if ( (elem = temp[i]) ) {
    stack = !options.once && [],


          }
      eventHandle.elem = elem;
    // Support: IE<9
    } else if ( !fn ) {
    });
      // Fix all IE cloning issues
      if ( isHidden( this ) ) {
      }
    dataType: null,
      if ( isSuccess ) {
          // Open the socket
    // Make sure that nothing sneaks out
  _default: 400
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
  // See test/unit/core.js for details concerning isFunction.
        for ( ; i < length; i++ ) {
    return (cache[ key ] = value);
    if ( a === b ) {
            }
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
    // Fire callbacks
    if ( !body ) {
    if ( elem ) {
        }
    }
    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
      return this;
  },
      for ( i = 0; (node = srcElements[i]) != null; ++i ) {
        jQuery( this ).show();

    username: null,
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
          // Passing null username, generates a login popup on Opera (#2865)
    // Record all 3 overflow attributes because IE does not
};
 * Released under the MIT license
  // Since version 1.3, DOM methods and functions like alert
          fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
  }
      hasDuplicate = true;
          }) :
        }
    fire = function( data ) {
      // Return for frameset docs that don't have a body
      type = ( type || "fx" ) + "queue";


    event.metaKey = !!event.metaKey;
    }

        // Ensure that the destination node is not null; Fixes #9587
      } else {
      // otherwise, set new filter values
    password: null,
      } else {
          if ( s.username ) {
    // change the overflow attribute when overflowX and

 * http://jquery.org/license
  // aren't supported. They return false on IE (#2968).
        }
  return cache;
      return 0;
          function( elem ) {
      }
      memory = options.memory && data;
      return;
      queue = jQuery._data( elem, type );
        // force browsers to behave consistently when non-matching value is set
    // Handle multiple events separated by a space


  after: function() {
        if ( destElements[i] ) {
        jQuery( this ).hide();
      style.filter = ralpha.test( filter ) ?
    cache: null,
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
            xhr.open( s.type, s.url, s.async, s.username, s.password );
    // overflowY are set to the same value
// Back Compat <1.8 extension point
 *
  isFunction: function( obj ) {
      }
}

            return fn( elem, 0, args );
    }
      fired = true;
    }

        if ( !optionSet ) {
    types = ( types || "" ).match( core_rnotwhite ) || [""];
    return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
    if ( one === 1 ) {
    return this.domManip( arguments, function( elem ) {
          fixCloneNodeIssues( node, destElements[i] );
      }
        filter.replace( ralpha, opacity ) :
    throws: false,
      }
          } else {
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
jQuery.fx.step = {};
 * Date: 2013-07-03T13:48Z
    return jQuery.type(obj) === "function";
    }

    // Parentless nodes are either documents or disconnected
          };

      firingIndex = firingStart || 0;

      // Speed up dequeue by getting out quickly if this is just a lookup
          elem.selectedIndex = -1;
    t = types.length;
  },
      origFn = fn;
      if ( this.parentNode ) {
        }
    });
        filter + " " + opacity;
    traditional: false,

            xhr.open( s.type, s.url, s.async );


 */
  },

/**
    } else if ( !aup || !bup ) {
      }
    if ( seed ) {
      firingStart = 0;
    container = document.createElement("div");
      if ( data ) {
        }
    while ( t-- ) {

      fn = function( event ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      }
  }
    }
    headers: {},
      // Status-dependent callbacks
          }
    // Set display property to inline-block for height/width
if ( jQuery.expr && jQuery.expr.filters ) {
(function( window, undefined ) {

    return chainable ?
 * Mark a function for special use by Sizzle
      return a === doc ? -1 :

      if ( postFinder || preFilter ) {
      firingLength = list.length;
    container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
        if ( !queue || jQuery.isArray(data) ) {
        return values;
      tmp = rtypenamespace.exec( types[t] ) || [];
  // Includes some event props shared by KeyEvent and MouseEvent
        // Can use an empty set, since event contains the info
      }
    }
});
  };
    */
      jqXHR.statusCode( statusCode );

    // animations on inline elements that are having width/height animated
  jQuery.expr.filters.animated = function( elem ) {

  isArray: Array.isArray || function( obj ) {
      elems :
 * @param {Function} fn The function to mark
        b === doc ? 1 :
      return fn;
        if ( postFinder ) {
      firing = true;

          queue = jQuery._data( elem, type, jQuery.makeArray(data) );
      }
      type = origType = tmp[1];
  props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        jQuery().off( event );
    });


}

      statusCode = undefined;
          // Apply custom fields if provided
    if ( jQuery.css( elem, "display" ) === "inline" &&
    return jQuery.grep(jQuery.timers, function( fn ) {
// Can't do this because several apps including ASP.NET trace
    return jQuery.type(obj) === "array";

 */
        aup ? -1 :
    }
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
      for ( ; list && firingIndex < firingLength; firingIndex++ ) {
    body.appendChild( container ).appendChild( div );
        } else {
    }
      namespaces = ( tmp[2] || "" ).split( "." ).sort();

        return origFn.apply( this, arguments );
  },
    // Copy the events from the original to the clone
jQuery.extend({

    accepts: {

          if ( s.xhrFields ) {
        jQuery.css( elem, "float" ) === "none" ) {
      return elem === fn.elem;
// the stack via arguments.caller.callee and Firefox dies if
  },
      // Gets
function markFunction( fn ) {
        bup ? 1 :
  },
          temp = [];
        if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {

          queue.push( data );
  },

  fixHooks: {},
      };

    if ( dataAndEvents ) {
  // Add in style property hooks for overriding the default
// These hooks cannot be added until DOM ready because the support test
      "*": allTypes,
      if ( fireGlobals ) {
            for ( i in s.xhrFields ) {

    }).length;
// you try to trace through "use strict" call chains. (#13335)

      bulk ?
  fn[ expando ] = true;
        sortInput ?

          i = matcherOut.length;
          memory = false; // To prevent further calls using add
    // Support: IE8
        }

      // There *must* be a type, no attaching namespace-only handlers

      // Use same guid so caller can remove using origFn
  // keepData is for internal use only--do not document
      if ( deepDataAndEvents ) {
  // behavior of getting and setting a style property
// for it is not run until after DOM ready
      text: "text/plain",
        globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
              xhr[ i ] = s.xhrFields[ i ];
      // inline-level elements accept inline-block;
  };
// Support: Firefox 18+
  isWindow: function( obj ) {
        fn.call( elems ) :
  return fn;
        ( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
  pseudos: {
          while ( i-- ) {
          break;
    // Check if table cells still have offsetWidth/Height when they are set
      }
  attr: function( elem, name, value ) {
      if ( !type ) {
  keyHooks: {
      fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
  remove: function( selector, keepData ) {
        srcElements = srcElements || getAll( elem );
  cssHooks: {
jQuery(function() {
      html: "text/html",
          [ jqXHR, s, isSuccess ? success : error ] );
            }
      // block-level elements need to be inline with layout
}
//"use strict";
    /* jshint eqeqeq: false */
        length ? fn( elems[0], key ) : emptyGet;
}
        0;
    // Potentially complex pseudos
            if ( (elem = matcherOut[i]) ) {
        }
    // to display:none and there are still other visible table cells in a
      return queue || [];
    var hooks, ret,
        continue;
    props: "char charCode key keyCode".split(" "),
    }
    var elem,
        destElements = destElements || getAll( clone );
    opacity: {
  if ( !jQuery.support.reliableMarginRight ) {
      xml: "application/xml, text/xml",
      }
          }
      if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
jQuery.fn.offset = function( options ) {
var
    return obj != null && obj == obj.window;
  },


    "not": markFunction(function( selector ) {
              // Restore matcherIn since elem is not yet a final match
      }
    // table row; if so, offsetWidth/Height are not reliable for use when
    }
      nType = elem.nodeType;
      }
    filter: function( event, original ) {
    return this.each( function() {
      elems = selector ? jQuery.filter( selector, this ) : this,

      get: function( elem, computed ) {
    jQuery.cssHooks.marginRight = {
      json: "application/json, text/javascript"


        style.display = "inline-block";
  if ( arguments.length ) {
  // The deferred used on DOM ready
  },

/**
    // If the nodes are siblings, we can do a quick check
      // Trim the selector passed to compile
              temp.push( (matcherIn[i] = elem) );
      firing = false;
    // determining if an element has been hidden directly using
  },



      jQuery.event.add( this, types, fn, data, selector );
      i = 0;
        for ( i = 0; (node = srcElements[i]) != null; i++ ) {
        if ( computed ) {
      get: function( elem, computed ) {
    },
      // Complete
          // Override mime type if needed

    return options === undefined ?
