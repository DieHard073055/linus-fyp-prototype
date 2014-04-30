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
  readyList,

  now: function() {
 * Support testing using an element
    } else if ( aup === bup ) {
      // to avoid treating leading and trailing
            }
      if ( list ) {
    // display:none (it is still safe to use offsets if a parent element is

    // don't get/set attributes on text, comment and attribute nodes
      // If event changes its type, use the special event handlers for the changed type
      // Add which for key events
    });

          cloneCopyEvent( node, destElements[i] );
          // We should always get a number back from opacity
        if ( computed ) {

      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
          if ( s.mimeType && xhr.overrideMimeType ) {
      } else {
      this :

  isNumeric: function( obj ) {
    return ( new Date() ).getTime();
 * @param {Function} fn Passed the created div and expects a boolean result
      return siblingCheck( a, b );
      // spaces as combinators
          }
        if ( stack ) {
    // hidden; don safety goggles and see bug #4512 for more information).
  dequeue: function( elem, type ) {
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      special = jQuery.event.special[ type ] || {};
      if ( event.which == null ) {
  },
    for ( ; (elem = elems[i]) != null; i++ ) {
        }
          var ret = curCSS( elem, "opacity" );
          // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
    contents: {

            xhr.overrideMimeType( s.mimeType );
        style.zoom = 1;
      this.each(function( i ) {
  // A central reference to the root jQuery(document)
    return !isNaN( parseFloat(obj) ) && isFinite( obj );
  },
 */
    }
      var input = [],
          postFinder( null, (matcherOut = []), temp, xml );
          if ( stack.length ) {
    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
    type = type || "fx";
      return;

        event.which = original.charCode != null ? original.charCode : original.keyCode;
  one: function( types, selector, data, fn ) {

      } else {
          return ret === "" ? "1" : ret;
          // Work around by temporarily setting element display to inline-block
      xml: /xml/,
      if ( fireGlobals ) {
          }
      }
        jQuery.offset.setOffset( this, options, i );
  rootjQuery,
  },

function assert( fn ) {

        results = [],
        }
            fire( stack.shift() );
    tds = div.getElementsByTagName("td");

    }
      // If selector defined, determine special event api type, otherwise given type
      }
    return this.on( types, selector, data, fn, 1 );
      if ( !keepData && elem.nodeType === 1 ) {
        cloneCopyEvent( elem, clone );
        }
          return jQuery.swap( elem, { "display": "inline-block" },
      html: /html/,
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

    }
      });


  // A method for quickly swapping in/out CSS properties to get correct calculations.
  var div = document.createElement("div");
    // Otherwise we need full lists of their ancestors for comparison
        matcher = compile( selector.replace( rtrim, "$1" ) );

          }
    tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
    var queue = jQuery.queue( elem, type ),

      type = ( selector ? special.delegateType : special.bindType ) || type;

  },
        jQuery.cleanData( getAll( elem ) );
      }
      }
            curCSS, [ elem, "marginRight" ] );
      json: /json/
        // Handle the global AJAX counter
          // X-Requested-With header
  }
  }
  // Support: IE<10
  type: function( obj ) {
  // Note: this method belongs to the css module but it's needed here for the support module.

    cur = a;

        // Move matched elements from seed to results to keep them synchronized
        } else if ( memory ) {
    isSupported = ( tds[ 0 ].offsetHeight === 0 );
      startLength = queue.length,
    // Fallback to prop when attributes are not supported

      return event;
  off: function( types, selector, fn ) {
      }
    }
    }
        }
    },
        if ( !( --jQuery.active ) ) {
          // For cross-domain requests, seeing as conditions for a preflight are


  // For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
    if ( obj == null ) {
  // If support gets modularized, this method should be moved back to the css module.
  try {
    while ( (cur = cur.parentNode) ) {
      return matcher[ expando ] ?
        i = matcherOut.length;
          list = [];

      fn = queue.shift(),
    if ( typeof elem.getAttribute === core_strundefined ) {
      // Update special based on newly reset type
    }
    var handleObj, type;


  },
      }

          jQuery.event.trigger("ajaxStop");
          // akin to a jigsaw puzzle, we simply never set it to be sure.
  if ( opts.overflow ) {
  var docElem, win,
  core_strundefined = typeof undefined,
      return String( obj );
  swap: function( elem, options, callback, args ) {
    return !!fn( div );
      ap.unshift( cur );
        markFunction(function( seed, matches, context, xml ) {
        while ( i-- ) {
        } else {
    tds[ 0 ].style.display = "";
      hooks = jQuery._queueHooks( elem, type ),
      return jQuery.prop( elem, name, value );
      special = jQuery.event.special[ type ] || {};
  },
    if ( types && types.preventDefault && types.handleObj ) {
      if ( elem.parentNode ) {
    // Preserve script evaluation history

    };
    responseFields: {
        }
          // (it can always be set on a per-request basis or even using ajaxSetup)
    style.overflow = "hidden";
    box = { top: 0, left: 0 },

    }
    var ret, name,
  } catch (e) {
    }
          var elem,
          if ( (elem = matcherOut[i]) &&
          self.disable();
    tds[ 1 ].style.display = "none";
      next = function() {
    }


      // ( event )  dispatched jQuery.Event
        if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
    destElements = getAll( clone, "script" );
  // Don't automatically add "px" to these possibly-unitless properties
  }
      xml: "responseXML",
      }
          // For same-domain requests, won't change header if already provided.
    if ( !jQuery.support.shrinkWrapBlocks ) {
    elem = this[ 0 ],
  // Use the correct document accordingly with window argument (sandbox)
    return typeof obj === "object" || typeof obj === "function" ?
      old = {};
    return false;
    cur = b;
            unmatched = matcher( seed, null, xml, [] ),
            (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {
        }

        jQuery.dequeue( elem, type );

      // handleObj is passed to all event handlers
  mouseHooks: {
      handleObj = types.handleObj;
          setGlobalEval( getAll( elem, "script" ) );
    if ( destElements.length > 0 ) {
  cssNumber: {

      text: "responseText",
    }
          if ( !s.crossDomain && !headers["X-Requested-With"] ) {
      anim.always(function() {
    doc = elem && elem.ownerDocument;
  location = window.location,
      class2type[ core_toString.call(obj) ] || "object" :

  } finally {
    while ( (cur = cur.parentNode) ) {
            i = seed.length;

      }
    // Support: IE8
      };
    // All attributes are lowercase
      handleObj = jQuery.extend({
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      jQuery( types.delegateTarget ).off(
        }
      setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    "columnCount": true,
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
      json: "responseJSON"

            headers["X-Requested-With"] = "XMLHttpRequest";
        style.overflow = opts.overflow[ 0 ];

  document = window.document,
      typeof obj;
    // Remember the old values, and insert the new ones
    // Remove from its parent by default
      bp.unshift( cur );

            seed[temp] = !(results[temp] = elem);
    },
    // Check if empty table cells still have offsetWidth/Height

    // Grab necessary hook if one is defined
        type: type,
    filter: function( event, original ) {
        handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
        elem.parentNode.removeChild( elem );
    }
    "fillOpacity": true,
  // getComputedStyle returns percent when specified for top/left/bottom/right
    },
    return jqXHR;
          }
        style.overflowX = opts.overflow[ 1 ];
  if ( !doc ) {
  docElem = document.documentElement,
  },
    for ( name in options ) {
    if ( div.parentNode ) {
    }
          // Match elements unmatched by `matcher`
          }
    // Actual Callbacks object
    support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );
    // If the fx queue is dequeued, always remove the progress sentinel
    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
        origType: origType,
      var body, eventDoc, doc,
        handleObj.selector,
      }

    "fontWeight": true,
  // rather than make the css module depend on the offset module, we just check for it here

  },

        style.overflowY = opts.overflow[ 2 ];
    return;


      old[ name ] = elem.style[ name ];
      div.parentNode.removeChild( div );

          while ( i-- ) {
        }
    self = {

    if ( fn === "inprogress" ) {
      name = name.toLowerCase();
        data: data,
        button = original.button,
        handleObj.handler
    }
    destElements = srcElements = node = null;
    "lineHeight": true,
  if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
    // Data converters

          // Need an extra try/catch for cross domain requests in Firefox 3
      });
  }
  // Map over jQuery in case of overwrite
  isPlainObject: function( obj ) {
      elem.style[ name ] = options[ name ];
    }
    // Walk down the tree looking for a discrepancy
            if ( (elem = unmatched[i]) ) {
      }
      // Add a callback or a collection of callbacks to the list
    // Check box-sizing and margin behavior.
      fn = queue.shift();
      hooks = jQuery.attrHooks[ name ] ||
        handler: handler,
        fromElement = original.fromElement;
      );


    "opacity": true,
    jQuery.each( [ "top", "left" ], function( i, prop ) {
    // Keys separate source (or catchall "*") and destination types with a single space
  getJSON: function( url, data, callback ) {
          try {
    }

  _jQuery = window.jQuery,
    var key;
    }
    // release memory in IE
    while ( ap[i] === bp[i] ) {
              seed[i] = !(matches[i] = elem);

      add: function() {
    div.innerHTML = "";
      startLength--;
        ( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
        guid: handler.guid,

      return this;
    return this;
    // Return the cloned set
    "order": true,
      jQuery.cssHooks[ prop ] = {
    converters: {
    return jQuery.get( url, data, callback, "json" );
            for ( i in headers ) {
  }
  docElem = doc.documentElement;



    div = null;
      i++;
            }
    // Add elements to results, through postFinder if defined
        if ( list ) {
    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
    }
    }
        selector: selector,
      // Calculate pageX/Y if missing and clientX/Y available
    }
  },
    return clone;
    "orphans": true,
        get: function( elem, computed ) {

  },
              xhr.setRequestHeader( i, headers[ i ] );


  // Map over the $ in case of overwrite
    // Must be an Object.
    ret = callback.apply( elem, args || [] );
  }
    }
          }
    } else {
          // First, we save the current length



        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
      if ( event.pageX == null && original.clientX != null ) {
    if ( typeof types === "object" ) {

  },
    "widows": true,
          if ( computed ) {
      // Convert anything to text

            }

  // Make sure it's not a disconnected DOM node
  _$ = window.$,
    // Because of IE, we also have to check the presence of the constructor property.

}

        }) :
      matcherOut = condense(
          var start = list.length;
    // Workaround failing boxSizing test due to offsetWidth returning wrong value
    if ( fn ) {
    if ( value !== undefined ) {
        namespace: namespaces.join(".")
        eventDoc = event.target.ownerDocument || document;
      // ( types-object [, selector] )
  empty: function() {

    "zIndex": true,
            computed = curCSS( elem, prop );
      "* text": String,
  getScript: function( url, callback ) {
          } catch( err ) {}
  // show/hide pass
  if ( !jQuery.contains( docElem, elem ) ) {

    // Make sure that DOM nodes and window objects don't pass through, as well
    // Revert the old values

    return i ?
        function( elem, context, xml ) {
        matcherOut === results ?
          (function add( args ) {
    // with some non-1 values of body zoom, ticket #13543


      }, handleObjIn );
        doc = eventDoc.documentElement;
      for ( type in types ) {
    var elem,
  buildFragment: function( elems, context, scripts, selection ) {
    "zoom": true
            // if curCSS returns percentage, fallback to offset

    return jQuery.get( url, undefined, callback, "script" );

  for ( prop in props ) {
    return box;
  // [[Class]] -> type pairs
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
    for ( name in options ) {
/**
      // Do a sibling check if the nodes have a common ancestor
          input[0] = elem;
          matcherOut.splice( preexisting, matcherOut.length ) :
            jQuery.each( args, function( _, arg ) {
    jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
      // Add a progress sentinel to prevent the fx queue from being
      if ( value === null ) {

        body = eventDoc.body;
        this.off( type, selector, types[ type ] );
      i = 0;
    var j, elem, contains,
  },
            return rnumnonpx.test( computed ) ?
      // Text to html (true = no transformation)
  }
          // Do send the request
    value = props[ prop ];
  }
  class2type = {},
      return false;
      elem.style[ name ] = old[ name ];
 * Adds the same handler for all of the specified attrs
      siblingCheck( ap[i], bp[i] ) :
          matcher( input, null, xml, results );
          matcherOut
              var type = jQuery.type( arg );
      support.boxSizing = div.offsetWidth === 4;
      // automatically dequeued
        jQuery.removeAttr( elem, name );
      // Init the event handler queue if we're the first

      }

      tmp, tag, tbody, wrap,

              jQuery( elem ).position()[ prop ] + "px" :
      "text html": true,
});
          // This may raise an exception which is actually
    if ( rfxtypes.exec( value ) ) {


    }
    }
 * @param {String} attrs Pipe-separated list of attributes

          return !results.pop();
      );
              if ( type === "function" ) {
    });
      if ( type === "fx" ) {

      if ( !(handlers = events[ type ]) ) {
        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
      return this;
    for ( ; (elem = this[i]) != null; i++ ) {
      l = elems.length,
  // Add in properties whose names you wish to fix before
              computed;


          // handled in jQuery.ajax (so no try/catch here)
      delete props[ prop ];
  // If we don't have gBCR, just use 0,0 rather than error
  // List of deleted data cache ids, so we can reuse them


 * @param {Function} handler The method that will be applied
      // Otherwise nodes in our document sort first
        };
      if ( postFinder ) {
                if ( !options.unique || !self.has( arg ) ) {

        queue.unshift( "inprogress" );
      } else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        handlers = events[ type ] = [];
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
      // Remove element nodes and prevent memory leaks

  // setting or getting the value
          }
      // Evaluate text as a json expression
jQuery.each( [ "get", "post" ], function( i, method ) {
          xhr.send( ( s.hasContent && s.data ) || null );
      toggle = toggle || value === "toggle";
  // BlackBerry 5, iOS 3 (original iPhone)
  core_deletedIds = [],
    try {
    return ret;
 */
      ap[i] === preferredDoc ? -1 :
    }),
        postFinder( null, results, matcherOut, xml );
                  list.push( arg );
    // Use window.getComputedStyle because jsdom on node.js will break without it.
      }
        return ret;
        handlers.delegateCount = 0;
      }
    if ( selector === false || typeof selector === "function" ) {
      if ( elem.nodeType === 1 ) {
      // Ensure a safe fragment
  cssProps: {
        }
      "text json": jQuery.parseJSON,
  jQuery[ method ] = function( url, data, callback, type ) {

      if ( value === ( hidden ? "hide" : "show" ) ) {
  if ( typeof elem.getBoundingClientRect !== core_strundefined ) {

      // Not own constructor property must be Object
  }
function addHandle( attrs, handler ) {
      bp[i] === preferredDoc ? 1 :

      } else {
                }
    if ( window.getComputedStyle ) {




      // ( types [, fn] )
        jQuery.cleanData( getAll( elem, false ) );
      safe = createSafeFragment( context ),
    // normalize float css property
      };

    // shift arguments if data argument was omitted
          // Listener
        continue;
    box = elem.getBoundingClientRect();
  core_version = "1.10.2",
      if ( obj.constructor &&
});
  var arr = attrs.split("|"),
      0;
    "has": markFunction(function( selector ) {
        push.apply( results, matcherOut );
              } else if ( arg && arg.length && type !== "string" ) {
      support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
      // clear up the last queue stop function
      } else {
        // Only use addEventListener/attachEvent if the special events handler returns false
      // Add relatedTarget, if necessary
      fn = selector;
      }

    "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
    });
      // Parse text as xml
    if ( jQuery.isFunction( data ) ) {
          callback = function( _, isAbort ) {
      }
  }

        !core_hasOwn.call(obj, "constructor") &&

    i = attrs.length;
  };
      return function( elem ) {
      }
                // Inspect recursively
      support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";
      delete hooks.stop;
        elem.setAttribute( name, value + "" );
        if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
      if ( !event.relatedTarget && fromElement ) {
      selector = undefined;

      nodes = [],
  },
  }
      "text xml": jQuery.parseXML
      type = type || callback;
            var status, responseHeaders, statusText, responses;
      orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
  win = getWindow( doc );
  // Save a reference to some core methods
        !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
jQuery.ready.promise = function( obj ) {


        return Sizzle( selector, elem ).length > 0;
    }
                add( arg );

      fn.call( elem, next, hooks );
        return value;
          // Bind the global event handler to the element
        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
    }
      // Remove any remaining nodes
      i = 0;


    },
      callback = data;

    }
  return {
  core_concat = core_deletedIds.concat,
        return false;
  if ( !readyList ) {
  while ( i-- ) {
  return doc;
      };
  });
              }
      // Check if div with explicit width and no margin-right incorrectly
    }
      }
          if ( elem.addEventListener ) {
      }
    if ( fn === false ) {
      while ( elem.firstChild ) {

  // Get and set the style property on a DOM Node
});

      data = undefined;
            // Firefox throws exceptions when accessing properties
  }
    top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
  core_push = core_deletedIds.push,
      }

    Expr.attrHandle[ arr[i] ] = handler;
};
    }),
}
            });
      // gets computed margin-right based on width of container. (#3333)


            elem.addEventListener( type, eventHandle, false );

      fn = returnFalse;
        elem.removeChild( elem.firstChild );
    for ( ; i < l; i++ ) {
  style: function( elem, name, value, extra ) {

    // For options that shouldn't be deep extended:
    }
            // of an xhr when a network error occurred

    left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
  core_slice = core_deletedIds.slice,
    } catch ( e ) {
    readyList = jQuery.Deferred();
  }



          })( arguments );
      // Fails in WebKit before Feb 2011 nightlies
    if ( !startLength && hooks ) {
    } else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {

      // Add which for click: 1 === left; 2 === middle; 3 === right
    }
      }
      elem = elems[ i ];
    // Don't set styles on text and comment nodes
if ( jQuery.expr && jQuery.expr.filters ) {
    // you can add your own custom options here if

            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
  if ( !jQuery.isEmptyObject( orig ) ) {
  };
  core_indexOf = core_deletedIds.indexOf,
      // IE8,9 Will throw exceptions on certain host objects #9897

}
Sizzle.matches = function( expr, elements ) {
    "contains": markFunction(function( text ) {
function matcherFromTokens( tokens ) {
          // Do we need to add the callbacks to the
      // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
      hooks.empty.fire();
      return ret;
          } else if ( elem.attachEvent ) {
      // Note: button is not normalized, so don't use it
    return this.each(function() {


    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
  jQuery.expr.filters.hidden = function( elem ) {
    // and when you create one that shouldn't be
    return jQuery.ajax({
            try {
    if ( dataShow ) {
};
  core_toString = class2type.toString,
      return false;
    // Catch cases where $(document).ready() is called after the browser event has already occurred.

  return Sizzle( expr, null, null, elements );
      return function( elem ) {
  var checkContext, matcher, j,
          // current firing batch?
      marginDiv = div.appendChild( document.createElement("div") );
    }

            elem.attachEvent( "on" + type, eventHandle );
      if ( !event.which && button !== undefined ) {
      jQuery.event.remove( this, types, fn, selector );
      // If this is a select, ensure that it displays empty (#12336)
      if ( elem || elem === 0 ) {
      return;
    // Support: Opera <= 12.12
    // deep extended (see ajaxExtend)
      url: url,

      if ( "hidden" in dataShow ) {

  core_hasOwn = class2type.hasOwnProperty,
    }
    // we once tried to use readyState "interactive" here, but it caused issues like the one
/**
};
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
    len = tokens.length,
          if ( firing ) {
      marginDiv.style.cssText = div.style.cssText = divReset;
  },
    } else {
          }
        event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
    });
      // Support: IE<9

    }
    // Opera reports offsetWidths and offsetHeights less than zero on some elements
    flatOptions: {
      type: method,
              // Was never called and is aborted or complete
        hidden = dataShow.hidden;
jQuery.offset = {
  core_trim = core_version.trim,

    // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
 * Checks document order of two siblings

      };
    leadingRelative = Expr.relative[ tokens[0].type ],
            firingLength = list.length;
      marginDiv.style.marginRight = marginDiv.style.width = "0";

      ret = jQuery.find.attr( elem, name );
        }
      }
  },
      if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
        // Add nodes directly

    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
      url: true,
      dataType: type,
              if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
      }


    // Support: IE<9
    if ( document.readyState === "complete" ) {
 * @param {Element} a
Sizzle.matchesSelector = function( elem, expr ) {
    }),
    implicitRelative = leadingRelative || Expr.relative[" "],
          // With memory, if we're not firing then
      div.style.width = "1px";
  // not intended for public consumption - generates a queueHooks object, or returns the current one

      }


        elem.options.length = 0;
        if ( jQuery.type( elem ) === "object" ) {
    // Make sure that we're working with the right name
      (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
      context: true
      data: data,

    } else {
  setOffset: function( elem, options, i ) {
  // Define a local copy of jQuery
    // Handle iteration over inherited properties before own properties.
      // Handle it asynchronously to allow scripts the opportunity to delay ready
 * @param {Element} b
  // Set document vars if needed

    i = leadingRelative ? 1 : 0,
          // we should call right away

  _queueHooks: function( elem, type ) {
      // Non-existent attributes return null, we normalize to undefined

      return event;
  trigger: function( type, data ) {
      }
          jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
    var ret, type, hooks,
  };
    }
      success: callback
                // Only called once
      dataShow = jQuery._data( elem, "fxshow", {} );
    var position = jQuery.css( elem, "position" );
  jQuery = function( selector, context ) {
    if ( jQuery.support.ownLast ) {
      setTimeout( jQuery.ready );
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
  if ( ( elem.ownerDocument || elem ) !== document ) {
    // "Whether an element is represented by a :lang() selector

          } else if ( memory ) {
      support.reliableMarginRight =
    var key = type + "queueHooks";
      return ret == null ?
      if ( special.add ) {
    }
    return this.each(function() {
    }

      origName = jQuery.camelCase( name ),

  },
    });
                callback = undefined;
    }

    // The jQuery object is actually just the init constructor 'enhanced'
      for ( key in obj ) {

 */
    setDocument( elem );
    // is based solely on the element's language value
    // The foundational matcher ensures that elements are reachable from top-level context(s)
            firingStart = start;
        !parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
    return jQuery._data( elem, key ) || jQuery._data( elem, key, {
        undefined :
        special.add.call( elem, handleObj );
  },
      jQuery.event.trigger( type, data, this );

        // Convert non-html into a text node
      style = elem.style;
  jQuery.expr.filters.visible = function( elem ) {

  };


    // set position first, in-case top/left are set even on static elem
    return new jQuery.fn.init( selector, context, rootjQuery );
        return core_hasOwn.call( obj, key );
    // Standards-based browsers support DOMContentLoaded
function siblingCheck( a, b ) {
  }
    // being equal to the identifier C,
    matchContext = addCombinator( function( elem ) {
            fire( memory );
    }
      empty: jQuery.Callbacks("once memory").add(function() {
        ret;


    });
    return this;
        } else if ( !rhtml.test( elem ) ) {

    return !jQuery.expr.filters.hidden( elem );
  // Creates a full fledged settings object into target
});
                // Do not keep as active anymore
    // store state if its toggle - enables .stop().toggle() to "reverse"
    if ( position === "static" ) {
  },
      }
    } else if ( document.addEventListener ) {
  var cur = b && a,

    // or beginning with the identifier C immediately followed by "-".
      return elem === checkContext;
          }

        jQuery._removeData( elem, type + "queue" );
    }
        if ( !handleObj.handler.guid ) {
  special: {
  },
  },
          nodes.push( context.createTextNode( elem ) );
    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
  };
  // with both ajaxSettings and settings fields.

                if ( handle ) {
    if ( toggle ) {
      elem.style.position = "relative";

    }
      // Use the handy event callback
    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
  // Make sure that attribute selectors are quoted
    // The matching of C against the element's language value is performed case-insensitively.
    }, implicitRelative, true ),
        }
    if ( typeof div.style.zoom !== core_strundefined ) {
        jQuery._removeData( elem, key );
  },
          handleObj.handler.guid = handler.guid;
    load: {
  triggerHandler: function( type, data ) {



}
  // If target is omitted, writes into ajaxSettings.
/* Handles responses to an ajax request:
                  xhr.onreadystatechange = jQuery.noop;
      dataShow.hidden = !hidden;
    }
  // Used for matching numbers

      document.addEventListener( "DOMContentLoaded", completed, false );
      ( ~b.sourceIndex || MAX_NEGATIVE ) -
  expr = expr.replace( rattributeQuotes, "='$1']" );
    // The identifier C does not have to be a valid language name."
    matchAnyContext = addCombinator( function( elem ) {
        return this;
      // Support: IE<8
      })

        }
      // Prevent triggered image.load events from bubbling to window.load
    var elem = this[0];
  clone: function( dataAndEvents, deepDataAndEvents ) {
        // Convert html into DOM nodes
    // gets hook for the prefixed version

  ajaxSetup: function( target, settings ) {
 * - finds the right dataType (mediates between content-type and expected dataType)
                  if ( xhrOnUnloadAbort ) {
    }

  core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    // Own properties are enumerated firstly, so to speed up,

      ( ~a.sourceIndex || MAX_NEGATIVE );

    // http://www.w3.org/TR/selectors/#lang-pseudo
      return indexOf.call( checkContext, elem ) > -1;
      },
      // Check if natively block-level elements act like inline-block
    });
  removeAttr: function( elem, value ) {
      }
      noBubble: true
    if ( elem ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        } else {
    // followed by the unprefixed version
// These hooks are used by animate to expand properties
    return settings ?
 * - returns the corresponding response
                    delete xhrCallbacks[ handle ];
    if ( hidden ) {
    var curElem = jQuery( elem ),

    // if last one is own, then all properties are own.
      // A fallback to window.onload, that will always work

  if ( support.matchesSelector && documentIsHTML &&
    "lang": markFunction( function( lang ) {
    }, implicitRelative, true ),
      // Remove a callback from the list
      // elements when setting their display to 'inline' and giving
  }
    var name, propName,

    },
      return jQuery.event.trigger( type, data, elem, true );
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
          tmp = tmp || safe.appendChild( context.createElement("div") );
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
jQuery.each({

 */
                  }
      jQuery( elem ).show();
      curOffset = curElem.offset(),
  // Used for splitting on whitespace
    for ( key in obj ) {}
      window.addEventListener( "load", completed, false );
  // Use IE sourceIndex if available on both nodes
    ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
      // lang value must be a valid identifier
    matchers = [ function( elem, context, xml ) {
      remove: function() {
      // them layout
});
      i = 0,
      // Add to the element's handler list, delegates in front
    focus: {
    }



  margin: "",
      // Building a settings object
function ajaxHandleResponses( s, jqXHR, responses ) {
                }
    } else {
      curCSSTop = jQuery.css( elem, "top" ),
  core_rnotwhite = /\S+/g,


  if ( diff ) {
    ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
      if ( !ridentifier.test(lang || "") ) {
      return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        if ( list ) {
      div.innerHTML = "";

      attrNames = value && value.match( core_rnotwhite );
      if ( selector ) {
      // Fire native event if possible so blur/focus sequence is correct
  }
    return this.map( function () {
          // Deserialize a standard representation
    // Check if we're setting a value
  padding: "",
      ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
  var firstDataType, ct, finalDataType, type,

      anim.done(function() {
      curCSSLeft = jQuery.css( elem, "left" ),

    return key === undefined || core_hasOwn.call( obj, key );
    // If IE event model is used
    return diff;

        Sizzle.error( "unsupported lang: " + lang );
        (checkContext = context).nodeType ?
          jQuery.each( arguments, function( _, arg ) {
      div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
jQuery.fn.extend({

        handlers.splice( handlers.delegateCount++, 0, handleObj );
      trigger: function() {
});
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
          tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
    if ( value !== undefined ) {
  border: "Width"

    contents = s.contents,
                // If it's an abort
        jQuery( elem ).hide();
      calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
  // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
  },
    } else {
  }
    try {
      }
          matchContext( elem, context, xml ) :
            var index;
      support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );
  queue: function( type, data ) {
    if ( attrNames && elem.nodeType === 1 ) {
      } else {
        if ( this !== safeActiveElement() && this.focus ) {
var isSimple = /^.[^:#\[\.,]*$/,
    });
          wrap = wrapMap[ tag ] || wrapMap._default;
      type = typeof value;
}, function( prefix, suffix ) {
      // Extending ajaxSettings
    dataTypes = s.dataTypes;
                if ( isAbort ) {
      });
      props = {}, curPosition = {}, curTop, curLeft;
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

      // Ensure firing before onload, maybe late but safe also for iframes

      var ret = matches.call( elem, expr );
      lang = lang.replace( runescape, funescape ).toLowerCase();
          matchAnyContext( elem, context, xml ) );
            while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {

    var setter = 2;
      while ( (name = attrNames[i++]) ) {
        handlers.push( handleObj );
          try {
  rparentsprev = /^(?:parents|prev(?:Until|All))/,
  },


  jQuery.cssHooks[ prefix + suffix ] = {
      ajaxExtend( jQuery.ajaxSettings, target );

                  // Abort it manually if needed
    }


  isEmptyObject: function( obj ) {
      document.attachEvent( "onreadystatechange", completed );
  // Check if b follows a

      return function( elem ) {
    } ];
              list.splice( index, 1 );
      // Support: IE6

        propName = jQuery.propFix[ name ] || name;
      }
            this.focus();
  rneedsContext = jQuery.expr.match.needsContext,

          tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];
      // convert relative number strings (+= or -=) to relative numbers. #7345
    expand: function( value ) {
  },
  // Remove auto dataType and get content-type in the process
                  if ( xhr.readyState !== 4 ) {
    anim.done(function() {
    // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
  // A simple way to check for HTML strings
    var name;

  if ( cur ) {
      // IE 9's matchesSelector returns false on disconnected nodes
        var elemLang;

              // Handle firing indexes
      // Check if elements with layout shrink-wrap their children
    if ( typeof type !== "string" ) {


            return false;
  // methods guaranteed to produce a unique set when starting from a unique set
  html: function( value ) {

      if ( type === "string" && (ret = rrelNum.exec( value )) ) {
      var i = 0,

  while( dataTypes[ 0 ] === "*" ) {
                    xhr.abort();
      var prop;
    if ( calculatePosition ) {
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    for ( name in obj ) {
      // A fallback to window.onload, that will always work
    while ( (cur = cur.nextSibling) ) {
      if ( ret || support.disconnectedMatch ||
        do {
  for ( ; i < len; i++ ) {
              if ( firing ) {
      div.style.display = "block";
      data = type;
        // Boolean attributes get special treatment (#10870)
      // Keep track of which events have ever been used, for event optimization
          } catch ( e ) {
  guaranteedUnique = {
    return jQuery.access( this, function( value ) {
          // Descend through wrappers to the right content
        value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
        expanded = {},
  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
    dataTypes.shift();
                  }
      jQuery._removeData( elem, "fxshow" );
      curPosition = curElem.position();
  // Strict HTML recognition (#11290: must start with <)
      return false;
      window.attachEvent( "onload", completed );
      if ( cur === b ) {
          // As well, disconnected nodes are said to be in a document
          if ( (elemLang = documentIsHTML ?
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
                if ( index <= firingLength ) {
      div.innerHTML = "<div></div>";
      type = "fx";
        if ( jQuery.expr.match.bool.test( name ) ) {
      jQuery.event.global[ type ] = true;
            // Support: IE<9
    children: true,
      var elem = this[0] || {},
          j = wrap[0];
        // Fixes bug #9237

  ajaxTransport: addToPrefiltersOrTransports( transports ),
    if ( ct === undefined ) {
                } else {
      for ( prop in orig ) {
      curTop = curPosition.top;
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    }

        return -1;
          // fragment in IE 9
            elem.lang :
      matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
                  firingLength--;
      div.firstChild.style.width = "5px";
      setter--;
          // Set corresponding property to false
    }
            // If we error on focus to hidden element (#1486, #12518),
    contents: true,
        i = 0,
          while ( j-- ) {
        type = "number";
        // assumes a single number if not a string

      ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                  responses = {};
        jQuery.style( elem, prop, orig[ prop ] );
      curLeft = curPosition.left;

    return true;
      // If IE and not a frame
      }
          elem.document && elem.document.nodeType !== 11 ) {
            elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
    } else {
                }
      support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );
    }
          if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

            // let .trigger() run the handlers
    next: true,
        l = this.length;
            tmp = tmp.lastChild;
      }
        parts = typeof value === "string" ? value.split(" ") : [ value ];
  // Main method
    }
                  status = xhr.status;
      }
    } else {
  // Match a standalone tag
  },
      // continually check to see if the document is ready
    }
        return ret;

      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
                if ( index <= firingIndex ) {


            elem[ propName ] = false;
    // Nullify elem to prevent memory leaks in IE
          }
    prev: true

          }


  ajax: function( url, options ) {
  }
                  responseHeaders = xhr.getAllResponseHeaders();
    });
      curTop = parseFloat( curCSSTop ) || 0;
  rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

      var top = false;
  }
      }
            elemLang = elemLang.toLowerCase();

                  firingIndex--;
      if ( support.inlineBlockNeedsLayout ) {
    if ( arguments.length < setter ) {
          // Support: IE<9
    elem = null;
        }
  };
      if ( value === undefined ) {

      // Make sure that NaN and null values aren't set. See: #7116
      for ( ; i < 4; i++ ) {



    for ( prop in orig ) {
      curLeft = parseFloat( curCSSLeft ) || 0;

  error: function( msg ) {


    } catch(e) {}
            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
      // Return special upon seeing a positional matcher
                }
        // Prevent IE 6 from affecting layout for positioned elements #11048
      return jQuery.queue( this[0], type );
          // Also clear defaultChecked/defaultSelected (if appropriate)
  },
      },

        return elem.nodeType === 1 ?
          // Manually add leading whitespace removed by IE
      if ( value == null || type === "number" && isNaN( value ) ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
    // If url is an object, simulate pre-1.5 signature
  // Check if we're dealing with a known content-type
                  // When requesting binary data, IE6-9 will throw an exception
      tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
    }
  // JSON RegExp
    throw new Error( msg );
      try {
  return a ? 1 : -1;
  }
          }
      if ( matcher[ expando ] ) {
              }
        // Prevent IE from shrinking the body in IE 7 mode #12869
    }
          } else {

      delegateType: "focusin"
jQuery.fn.extend({
          elem.innerHTML.replace( rinlinejQuery, "" ) :
          if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
        return;
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
    if ( typeof url === "object" ) {
  if ( ct ) {
                  // on any attempt to access responseText (#11426)


  rvalidchars = /^[\],:{}\s]*$/,
  },
        top = window.frameElement == null && document.documentElement;
}

        } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
        // Find the next relative operator (if any) for proper handling
            }
        // Support: IE<8

            elem[ jQuery.camelCase( "default-" + name ) ] =
  // Detach an event or set of events from an element
    },
  find: function( selector ) {
          undefined;
            nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
      }
      }
      options = url;
    for ( type in contents ) {
                  if ( typeof xhr.responseText === "string" ) {
      if ( !( prop in dataShow ) ) {
    if ( jQuery.isFunction( options ) ) {
  rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

      } catch(e) {}

  return Sizzle( expr, document, null, [elem] ).length > 0;
        return false;
        j = ++i;
          });
        body.style.zoom = 1;
    return data === undefined ?
              elem[ propName ] = false;
  remove: function( elem, types, handler, selector, mappedTypes ) {
    blur: {
    var i,
      }
          }


      url = undefined;
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
                    responses.text = xhr.responseText;
        dataShow[ prop ] = tween.start;
      options = options.call( elem, i, curOffset );
  rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  // data: string of html

/**
};
      };
        for ( ; j < len; j++ ) {
        }
      }
      this :
          }
    var j, handleObj, tmp,
      trigger: function() {
      ret = [],


      // If a number was passed in, add 'px' to the (except for certain CSS properties)
      return expanded;
    }
        dataTypes.unshift( type );
                  }
        if ( hidden ) {
    }
  rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
  // context (optional): If specified, the fragment will be created in this context, defaults to document
      if ( top && top.doScroll ) {
 * Returns a function to use in pseudos for input types

    }),
          if ( Expr.relative[ tokens[j].type ] ) {
        return this;
    }
      this.each(function() {

      origCount, t, events,
        if ( this === safeActiveElement() && this.blur ) {
      self = this,
      // See if we can take a shortcut and just use innerHTML
          // Remove IE's autoinserted <tbody> from table fragments
      if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
    }

        break;

          tween.end = tween.start;


  // keepScripts (optional): If true, will include scripts passed in the html string
        (function doScrollCheck() {
 * @param {String} type
Sizzle.contains = function( context, elem ) {

            break;
      },

        var queue = jQuery.queue( this, type, data );
        // See #9699 for explanation of this approach (setting first, then removal)
      special, handlers, type,
          this.blur();
      len = self.length;
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
          if ( !jQuery.support.tbody ) {
        value += "px";
  };
    // Force options to be an object
      }
                  // Firefox throws an exception when accessing
          tween.start = prop === "width" || prop === "height" ? 1 : 0;
    if ( options.top != null ) {
  // Matches dashed string for camelizing
  parseHTML: function( data, context, keepScripts ) {
          if ( !jQuery.isReady ) {
 */
  // Set document vars if needed
    // Miscellaneous
          }
      // Check if a given callback is in the list.
    body.removeChild( container );

        } else {
      namespaces, origType,
          return false;

        ( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&

      }

    options = options || {};
    }
                  // statusText for faulty cross-domain requests
        }
      props.top = ( options.top - curOffset.top ) + curTop;
  rmsPrefix = /^-ms-/,
    if ( !data || typeof data !== "string" ) {

function createInputPseudo( type ) {
  if ( ( context.ownerDocument || context ) !== document ) {
    "target": function( elem ) {
        }
      // If no argument is given, return whether or not list has callbacks attached.

        // ensure a hooks for this queue
          jQuery.attr( elem, name, "" );
      elemData = jQuery.hasData( elem ) && jQuery._data( elem );
        }
    if ( typeof selector !== "string" ) {
        ( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
            // String was a <table>, *may* have spurious <tbody>

  if ( !rmargin.test( prefix ) ) {

  }
                  try {
      }
    }
  rdashAlpha = /-([\da-z])/gi,
      return null;
            try {
  return function( elem ) {
    setDocument( context );
      var hash = window.location && window.location.hash;
        return setMatcher(
      has: function( fn ) {
    // Null elements to avoid leaks in IE
        jQuery._queueHooks( this, type );
        }

      },
      return this.pushStack( jQuery( selector ).filter(function() {
        !wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {
            elem = tag === "table" && !rtbody.test( elem ) ?
      // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
    var // Cross-domain detection vars

                    statusText = xhr.statusText;
    }
    if ( options.left != null ) {

    }
              // Use the trick by Diego Perini
    var name = elem.nodeName.toLowerCase();
  }
      return hash && hash.slice( 1 ) === elem.id;
          i > 1 && elementMatcher( matchers ),
        return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
    container = div = tds = marginDiv = null;


    if ( !elemData || !(events = elemData.events) ) {
      delegateType: "focusout"
        for ( i = 0; i < len; i++ ) {

              tmp.firstChild :
      // but it would mean to define eight (for every problematic property) identical functions
  }
      parts,
  // Check to see if we have a response for the expected dataType
                  } catch( e ) {
  }
      props.left = ( options.left - curOffset.left ) + curLeft;
  // Used by jQuery.camelCase as callback to replace()
    if ( typeof context === "boolean" ) {
              // http://javascript.nwbox.com/IEContentLoaded/
    return name === "input" && elem.type === type;
  return contains( context, elem );
    },
          i > 1 && toSelector(
      },
  });
        if ( type === "fx" && queue[0] !== "inprogress" ) {
        elem.removeAttribute( getSetAttribute ? name : propName );
      return;
    },
          if ( jQuery.contains( self[ i ], this ) ) {
        value = value.replace( rxhtmlTag, "<$1></$2>" );

      if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
});
      // Loop variable
  if ( dataTypes[ 0 ] in responses ) {
                    // We normalize with Webkit giving an empty statusText
}
    }
  fcamelCase = function( all, letter ) {
      keepScripts = context;
              top.doScroll("left");
  };
};

            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
      // Remove all callbacks from the list

          jQuery.dequeue( this, type );
      }
    }
    click: {
            return true;

              // String was a bare <thead> or <tfoot>
        style[ name ] = "inherit";
var r20 = /%20/g,
      i,
    finalDataType = dataTypes[ 0 ];
                    statusText = "";


    return letter.toUpperCase();
      context = false;
            } catch(e) {
}

    "root": function( elem ) {
            tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
      empty: function() {
  // Null elements to avoid leaks in IE
        }
    }

      // For checkbox, fire native event so checked state will be right
          }
        try {
              wrap[1] === "<table>" && !rtbody.test( elem ) ?
      }
  rbracket = /\[\]$/,
      // URL without anti-cache param
  } else {
                  }
function Tween( elem, options, prop, end, easing ) {
    if ( "using" in options ) {
  },
    }
              return setTimeout( doScrollCheck, 50 );

Sizzle.attr = function( elem, name ) {
      return elem === docElem;
          ).replace( rtrim, "$1" ),
        list = [];
  all = select = fragment = opt = a = input = null;
      });
  },
    // Once for each type.namespace in types; type may be omitted
      trigger: function() {
        }
          for (; i < l; i++ ) {
                tmp :

  rCRLF = /\r?\n/g,
      cacheURL,
    // Try convertible dataTypes

  return new Tween.prototype.init( elem, options, prop, end, easing );
      options.using.call( elem, props );

    context = context || document;
            }
/**
  // Set document vars if needed
    },
          matcher,
        firingLength = 0;

  },

    types = ( types || "" ).match( core_rnotwhite ) || [""];
        if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
      }) );
            // Remove element nodes and prevent memory leaks
                0;
      // If a hook was provided, use that value, otherwise just set the specified value
  rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      // Response headers as string
    for ( type in responses ) {
                  // Filter status for non standard behaviors
}
    } else {
  // The ready event handler


 * Returns a function to use in pseudos for buttons
  if ( ( elem.ownerDocument || elem ) !== document ) {

          i < j && matcherFromTokens( tokens.slice( i, j ) ),
        return this;
  return support;
  dequeue: function( type ) {
  attrHooks: {
    t = types.length;
          this.click();
    }
            elem = this[i] || {};

      if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
  rsubmittable = /^(?:input|select|textarea|keygen)/i;
      responseHeadersString,
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {

jQuery.Tween = Tween;
      curElem.css( props );
  completed = function( event ) {
    var parsed = rsingleTag.exec( data ),
            // detach all dom ready events
 * @param {String} type
    setDocument( elem );
    "focus": function( elem ) {
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
      },
})({});
    return this.each(function() {
    type: {
    while ( t-- ) {
          return false;

            if ( elem.nodeType === 1 ) {
            j = elem && elem.childNodes.length;


      // timeout handle
        finalDataType = type;
                  // If the request is local and we have data: assume a success

    }

      scripts = !keepScripts && [];
            detach();
 */
  }
      return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          j < len && toSelector( tokens )
      // Have the list do nothing anymore

      jQuery.dequeue( this, type );
      set: function( elem, value ) {
      tmp = rtypenamespace.exec( types[t] ) || [];
        }
    for ( i = 0; i < len; i++ ) {
              jQuery.cleanData( getAll( elem, false ) );
            while ( j-- ) {
        // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
jQuery.fn.extend({
      timeoutTimer,
        break;
                  // (success with no data won't get notified, that's the best we
Tween.prototype = {
  }
    // readyState === "complete" is good enough for us to call the dom ready in oldIE


function createButtonPseudo( type ) {

    },
        );
      disable: function() {
var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    });
        if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
      type = origType = tmp[1];
      },
      jQuery.find( selector, self[ i ], ret );
              elem.innerHTML = value;
              if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
        // Fixes bug #5509
  serialize: function() {

      }
                  // can do given current implementations)
  constructor: Tween,
};
    if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
    // Single tag
            // and execute any waiting functions
  return function( elem ) {
  var fn = Expr.attrHandle[ name.toLowerCase() ],

      }
        list = stack = memory = undefined;
  rmultiDash = /([A-Z])/g;
  },
          // Setting the type on a radio button after the value resets the value in IE6-9
      namespaces = ( tmp[2] || "" ).split( "." ).sort();

    }
            }
                elem.removeChild( tbody );
        try {
    return jQuery.param( this.serializeArray() );
      // To know if global events are to be dispatched
      if ( !firstDataType ) {
                  if ( !status && s.isLocal && !s.crossDomain ) {
  init: function( elem, options, prop, end, easing, unit ) {

      detach();
    if ( parsed ) {
            jQuery.ready();
    var name = elem.nodeName.toLowerCase();
    // Don't get fooled by Object.prototype properties (jQuery #13807)
    // Boolean properties
      matchers.push( matcher );
        return this;

  // Based off of the plugin by Clint Helfers, with permission.
          // Reset value to default in case type is set after value during creation

      // For cross-browser consistency, don't fire native .click() on links

          }
              }
          style[ name ] = value;
  },
      fireGlobals,
        firstDataType = type;
                    status = responses.text ? 200 : 404;
    this.elem = elem;

      jQuery.ready();
      return [ context.createElement( parsed[1] ) ];
          }
    return (name === "input" || name === "button") && elem.type === type;
    val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
    "enabled": function( elem ) {
    }
      },
function internalData( elem, name, data, pvt /* Internal Use Only */ ){
  // http://blindsignals.com/index.php/2009/07/jquery-delay/
          var val = elem.value;
      // Unbind all events (on this namespace, if provided) for the element
      _default: function( event ) {
    // Needed because $( selector, context ) becomes $( context ).find( selector )

            }
        } catch(e) {}
  serializeArray: function() {

      }
                  // IE - #1450: sometimes returns 1223 when it should be 204
    this.prop = prop;
jQuery.fn.extend({
    }
    }
        })();
  };
      fn( elem, name, !documentIsHTML ) :
      return elem.disabled === false;
  }
      // Is it disabled?
  if ( !jQuery.acceptData( elem ) ) {
  delay: function( time, type ) {
          elem.setAttribute( "type", value );
      if ( !type ) {
        return jQuery.nodeName( event.target, "a" );
    ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
          elem = 0;
          }
      }
    return this.map(function(){
      transport,
    }
                  } else if ( status === 1223 ) {
    this.easing = easing || "swing";

  },

      }
}
      undefined;
    },

      disabled: function() {
    return;
    time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
          if ( val ) {
        for ( type in events ) {
      }
    ret.selector = this.selector ? this.selector + " " + selector : selector;



      // Can add propHook for "elements" to filter or add form elements
      // Response headers
    // Or just use first one
                    status = 204;
    this.options = options;
  position: function() {
  // Clean-up method for dom ready events
    parsed = jQuery.buildFragment( [ data ], context, scripts );
    }



  return elementMatcher( matchers );
        return !list;
  }
    type = type || "fx";
            elem.value = val;
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
    },
    return ret;
        // If using innerHTML throws an exception, use the fallback method
          jQuery.merge( nodes, tmp.childNodes );
    } else {
      var elements = jQuery.prop( this, "elements" );
      responseHeaders,
    finalDataType = finalDataType || firstDataType;
                  }
    this.start = this.now = this.cur();
    if ( !this[ 0 ] ) {
  detach = function() {
    if ( scripts ) {
  }
/**
  return val === undefined ?
    "disabled": function( elem ) {
}
      },


          }
        }

  },
        } catch(e) {}

      // If a hook was provided get the non-computed value from there
      return elements ? jQuery.makeArray( elements ) : this;
      // Create the final options object
  }
                }
    this.end = end;
      return;
    if ( document.addEventListener ) {
      jQuery( scripts ).remove();
  return readyList.promise( obj );
 * Returns a function to use in pseudos for positionals
    support.attributes || !documentIsHTML ?
      return elem.disabled === true;

      // Lock the list in its current state
  var ret, thisCache,
    return this.queue( type, function( next, hooks ) {
          return value;
        continue;
    beforeunload: {

      }
          // Fix #12392 for WebKit and IE > 9
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
    })
      s = jQuery.ajaxSetup( {}, options ),

              }
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
    }
      document.removeEventListener( "DOMContentLoaded", completed, false );
    }
};
 * @param {Function} fn
      elem.getAttribute( name ) :
    },
function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
      lock: function() {
    internalKey = jQuery.expando,
      var timeout = setTimeout( next, time );
        }
      }
      postDispatch: function( event ) {
  has: function( target ) {

          tmp.textContent = "";
        return ret;
    .filter(function(){
      // Callbacks context
  // If we found a dataType
            } catch( firefoxAccessException ) {
  },

      window.removeEventListener( "load", completed, false );
    return jQuery.merge( [], parsed.childNodes );

 */
      (val = elem.getAttributeNode(name)) && val.specified ?

  // A counter to specify which element is currently being matched
        stack = undefined;

      hooks.stop = function() {
      }


    var i,
      if ( elem ) {

      }
      var type = this.type;
      callbackContext = s.context || s,
  // We add the dataType to the list if needed
              if ( !isAbort ) {
  cur: function() {
    var offsetParent, offset,

  },
// Populate the class2type map
function createPositionalPseudo( fn ) {
        val.value :
    "checked": function( elem ) {
  var matcherCachedRuns = 0,
        if ( !memory ) {
    // We have to handle DOM nodes and JS objects differently because IE6-7
        clearTimeout( timeout );
    }
      special = jQuery.event.special[ type ] || {};
        // Even when returnValue equals to undefined Firefox will still show alert
      targets = jQuery( target, this ),
        this.empty().append( value );
          // Fix #12392 for oldIE

      // Use .is(":disabled") so that fieldset[disabled] works
      // Context for global events is callbackContext if it is a DOM node or jQuery collection
  // and return the corresponding response
                complete( -1, firefoxAccessException );
    var hooks = Tween.propHooks[ this.prop ];
      parentOffset = { top: 0, left: 0 },
    } else {

jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
  return markFunction(function( argument ) {
        null :
      // In CSS3, :checked should return both checked and selected elements
    bySet = setMatchers.length > 0,
          self.disable();
    // can't GC object references properly across the DOM-JS boundary
      };
  },
      type = ( selector ? special.delegateType : special.bindType ) || type;
        if ( event.result !== undefined ) {
      len = targets.length;
      }
          while ( tmp.firstChild ) {
      // Otherwise just get the value from the style object
      return this.name && !jQuery( this ).is( ":disabled" ) &&
      globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
  if ( finalDataType ) {
              }

      elem = this[ 0 ];
      document.detachEvent( "onreadystatechange", completed );
  parseJSON: function( data ) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
    argument = +argument;
    val;
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
    byElement = elementMatchers.length > 0,
        }
    isNode = elem.nodeType,
    });

      handlers = events[ type ] || [];
          event.originalEvent.returnValue = event.result;

    }, null, value, arguments.length );
            tmp.removeChild( tmp.firstChild );
      return style[ name ];
        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
        jQuery( callbackContext ) :
    if ( finalDataType !== dataTypes[ 0 ] ) {
            }
    return hooks && hooks.get ?

      window.detachEvent( "onload", completed );
    // Attempt to parse using the native JSON parser first
});
    return markFunction(function( seed, matches ) {
};
      var nodeName = elem.nodeName.toLowerCase();
    superMatcher = function( seed, context, xml, results, expandContext ) {
        return this;

  },
  propFix: {
      tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
        }
    return this.filter(function() {
  },
          }
    }
        ( this.checked || !manipulation_rcheckableType.test( type ) );
        jQuery.event,
      dataTypes.unshift( finalDataType );

      hooks.get( this ) :
    // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
    }
    if ( window.JSON && window.JSON.parse ) {

      var j,

      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
      var elem, j, matcher,
      },
    // Only DOM nodes need the global jQuery cache; JS object data is
  clearQueue: function( type ) {
    "for": "htmlFor",

      }
      for ( i = 0; i < len; i++ ) {


  },
    })
      // Deferreds
    }
            // Call complete if needed
      Tween.propHooks._default.get( this );
    if ( jQuery.css( elem, "position" ) === "fixed" ) {
  };
      return window.JSON.parse( data );
function isArraylike( obj ) {
        matchIndexes = fn( [], seed.length, argument ),
Sizzle.error = function( msg ) {
    },
        setMatched = [],
      // Is it locked?
    // attached directly to the object so GC can occur automatically
    return this.queue( type || "fx", [] );
    "class": "className"
      // Remove matching events
    }
        if ( jQuery.contains( this, targets[i] ) ) {
  replaceWith: function() {
          // Remember the top-level container for proper cleanup

    .map(function( i, elem ){
      deferred = jQuery.Deferred(),
    return responses[ finalDataType ];
            if ( responses ) {
  },
      // we assume that getBoundingClientRect is available when computed position is fixed

    }
  var length = obj.length,
        i = matchIndexes.length;
  throw new Error( "Syntax error, unrecognized expression: " + msg );

        matchedCount = 0,
      locked: function() {
    cache = isNode ? jQuery.cache : elem,
  },
  },
      origCount = j = handlers.length;
  },
          return true;
    var
          tmp = safe.lastChild;
  css: function( elem, name, extra, styles ) {
      var val = jQuery( this ).val();
      completeDeferred = jQuery.Callbacks("once memory"),
  }
              complete( status, statusText, responses, responseHeaders );
  run: function( percent ) {
      offset = elem.getBoundingClientRect();
jQuery.fn = jQuery.prototype = {

    type = jQuery.type( obj );

};
    "selected": function( elem ) {
        i = "0",
        return !stack;

  // Get a promise resolved when queues of a certain type

      while ( j-- ) {

        }
      // Snapshot the DOM in case .domManip sweeps something relevant into its fragment
        }
    var num, val, hooks,

      // Status-dependent callbacks
}
            }
    var eased,
    } else {
  // The current version of jQuery being used
    if ( data === null ) {

      // Match elements found at the specified indexes

      // Accessing this property makes selected-by-default
        unmatched = seed && [],
      },
    // Only defining an ID for JS objects if its cache already exists allows
  // are emptied (fx is the type by default)
  prop: function( elem, name, value ) {
        handleObj = handlers[ j ];
  simulate: function( type, elem, event, bubble ) {
      }
      args = jQuery.map( this, function( elem ) {
      }
      origName = jQuery.camelCase( name );
      return val == null ?
      statusCode = s.statusCode || {},

          };
      hooks = Tween.propHooks[ this.prop ];
      // Get *real* offsetParent
  jquery: core_version,
      return data;
  if ( jQuery.isWindow( obj ) ) {
      while ( i-- ) {
/**
      // options in Safari work properly
        outermost = expandContext != null,
      // Call all callbacks with the given context and arguments
    // the code to shortcut on the same path as a DOM node with no cache
  promise: function( type, obj ) {
    var ret, hooks, notxml,

    // Piggyback on a donor event to simulate a different one.
    });
        return [ elem.nextSibling, elem.parentNode ];
    }

        null :
      // Headers (they are sent all at once)
/* Chain conversions given the request and the original response


      offsetParent = this.offsetParent();

    }
    return false;
        if ( seed[ (j = matchIndexes[i]) ] ) {
 * Document sorting and removing duplicates
      if ( elem.parentNode ) {
        contextBackup = outermostContext,
      fireWith: function( context, args ) {
    id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
    var tmp,
      nType = elem.nodeType;
        if ( ( mappedTypes || origType === handleObj.origType ) &&
    // Fake originalEvent to avoid donor's stopPropagation, but if the
  },
      }),

    // Make sure that we're working with the right name
        jQuery.isArray( val ) ?
      requestHeaders = {},
 * Also sets the responseXXX fields on the jqXHR instance
          if ( !s.async ) {
    if ( this.options.duration ) {

  constructor: jQuery,

  }
          seed[j] = !(matches[j] = seed[j]);
 * @param {ArrayLike} results
        elem.parentNode.selectedIndex;
        // We must always have either seed elements or context
        if ( list && ( !fired || stack ) ) {

      count = 1,

          ( !handler || handler.guid === handleObj.guid ) &&
    // simulated event prevents default then we do the same on the donor.

      i = 0;
    // Fix #11356: Clear elements from fragment
    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
          jQuery.map( val, function( val ){
      requestHeadersNames = {},
 */
            // if we're in sync mode we fire the callback
      this.pos = eased = jQuery.easing[ this.easing ](
      // Get correct offsets
  init: function( selector, context, rootjQuery ) {
    if ( typeof data === "string" ) {

        }
 */
      }
        elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
          args = args || [];
  // Avoid doing any more work than we need to when trying to get data on an
      defer = jQuery.Deferred(),
    // don't get/set properties on text, comment and attribute nodes
          ( !tmp || tmp.test( handleObj.namespace ) ) &&
    var e = jQuery.extend(
  not: function( selector ) {

    if ( tmp ) {

            return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
      // The jqXHR state
function ajaxConvert( s, response, jqXHR, isSuccess ) {
            callback();
        percent, this.options.duration * percent, 0, 1, this.options.duration
      offset = this.offset();
    var match, elem;

  if ( obj.nodeType === 1 && length ) {
      }
Sizzle.uniqueSort = function( results ) {

        // Use integer dirruns iff this is the outermost matcher
          args = [ context, args.slice ? args.slice() : args ];
  // object that has no data at all
      elements = this,
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
          ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
      new jQuery.Event(),
    return this.pushStack( winnow(this, selector || [], true) );
    // Make the changes, replacing each context element with the new content
      safe.removeChild( tmp );
    // gets hook for the prefixed version
          }) :
      state = 0,
  var conv2, current, conv, tmp, prev,
          } else if ( xhr.readyState === 4 ) {
      );
      if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {

      // Make sure leading/trailing whitespace is removed (IE can't handle it)
    return true;
    });
  var elem,
      return elem.selected === true;
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);
          if ( firing ) {
  if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) {
      i = this.length,
      return;
          handlers.splice( j, 1 );
      event,
  },
    this.domManip( arguments, function( elem ) {
    }
    // followed by the unprefixed version
          { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
      // Default abort message
    converters = {},
            // (IE6 & IE7) if it's in cache and has been
    } else {
        parentOffset = offsetParent.offset();
    // HANDLE: $(""), $(null), $(undefined), $(false)
      data = jQuery.trim( data );
  }
  });
    duplicates = [],
    },

            stack.push( args );
    return;
      resolve = function() {
    }

      {

      var next = args[ i++ ],

    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
    }).get();
      strAbort = "canceled",
    // Work with a copy of dataTypes in case we need to modify it for conversion
            // retrieved directly we need to fire the callback
      this.pos = eased = percent;
      }
    if ( !selector ) {


}
    j = 0,

      if ( outermost ) {
          } else {
  }
        if ( !( --count ) ) {

          if ( handleObj.selector ) {
        type: type,
  filter: function( selector ) {
        parent = args[ i++ ];
    // Reset defaultChecked for any radios and checkboxes

  }
      // Fake xhr
    dataTypes = s.dataTypes.slice();
            setTimeout( callback );
    }

      return this;
      if ( data ) {
  return type === "array" || type !== "function" &&

    i = 0;
    // Contents
        outermostContext = context !== document && context;
            fire( args );

          defer.resolveWith( elements, [ elements ] );
    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
            handlers.delegateCount--;
        isSimulated: true,
    return this.pushStack( winnow(this, selector || [], false) );

    // about to be appended to the DOM in IE 6/7 (#8060)
    // If a hook was provided get the computed value from there
});
      jqXHR = {

          } else {
    this.now = ( this.end - this.start ) * eased + this.start;
      // Add offsetParent borders
    }
        // Make sure the incoming data is actual JSON
    ( length === 0 ||
/**

    "empty": function( elem ) {
        cachedruns = matcherCachedRuns;
          }
  if ( !id ) {
        }

          }
        originalEvent: {}
  },
      if ( parent ) {
    if ( !jQuery.support.appendChecked ) {
    if ( hooks && "get" in hooks ) {

        readyState: 0,
  // Create converters map with lowercased keys
            handle = ++xhrId;

      parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );

        // Logic borrowed from http://json.org/json2.js
    typeof length === "number" && length > 0 && ( length - 1 ) in obj );
 * Detect xml
  // Unless we *know* we can detect duplicates, assume their presence
      // http://www.w3.org/TR/selectors/#empty-pseudo
      }
        }
    // Only DOM nodes need a new unique ID for each element since their data
      };
    if ( notxml ) {
          if ( special.remove ) {
      }

        // Don't use the snapshot next if it has moved (#13810)
      jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
      val = hooks.get( elem, true, extra );
//Serialize an array of form elements or a set of

  if ( dataTypes[ 1 ] ) {
            if ( xhrOnUnloadAbort ) {
    if ( this.options.step ) {
      parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
    // Handle HTML strings
        if ( rvalidchars.test( data.replace( rvalidescape, "@" )
}
 * @param {Element|Object} elem An element or a document
  hasDuplicate = !support.detectDuplicates;
      // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),

        return this;
    // ends up in the global cache

      // Fix name and attach hooks
            special.remove.call( elem, handleObj );
    );
  is: function( selector ) {
        if ( next && next.parentNode !== parent ) {
    }
    }
//key/values into a query string
        // Builds headers hashtable if needed
    for ( conv in s.converters ) {
              // Create the active xhrs callbacks list if needed
      this.options.step.call( this.elem, this.now, this );
    }
    if ( typeof selector === "string" ) {
          .replace( rvalidtokens, "]" )

 */
  sortInput = !support.sortStable && results.slice( 0 );
      //   not comment, processing instructions, or others
      // Add elements passing elementMatchers directly to results
      },
    if ( isNode ) {
    if ( typeof type !== "string" ) {
      name = jQuery.propFix[ name ] || name;
          }
    if ( bubble ) {
    return !!winnow(
          next = this.nextSibling;


jQuery.param = function( a, traditional ) {
        getResponseHeader: function( key ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
              // and attach the unload handler
    }

      if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
          .replace( rvalidbraces, "")) ) {
// All jQuery objects should point back to these
isXML = Sizzle.isXML = function( elem ) {
  results.sort( sortOrder );
      // Thanks to Diego Perini for the nodeName shortcut
      // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
      // Call all the callbacks with the given arguments
      id = elem[ internalKey ] = core_deletedIds.pop() || jQuery.guid++;
      obj = type;
      hooks = jQuery.propHooks[ name ];
        }
      jQuery.event.trigger( e, null, elem );
      this,
        }
    i = 0;
    // Otherwise, if a way to get the computed value exists, use that
  var prefix,
          var match;
    }
              if ( !xhrCallbacks ) {

    // Subtract parent offsets and element margins
        // Assume that strings that start and end with <> are HTML and skip the regex check

rootjQuery = jQuery(document);
  // documentElement is verified for cases where it doesn't yet exist

      //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
      for ( ; (elem = elems[i]) != null; i++ ) {
      fire: function() {
    } else {
      type = undefined;
    }
      }
    } else {

        jQuery( this ).remove();
    while ( (elem = nodes[ i++ ]) ) {
    if ( val === undefined ) {
    s = [],
          if ( state === 2 ) {
  }
                xhrCallbacks = {};
    if ( hooks && hooks.set ) {
    // note: when an element has margin: auto the offsetLeft and marginLeft
        match = [ null, selector, null ];
          return ( new Function( "return " + data ) )();
/*!
  // (such as loading iframes in IE - #4833)
  if ( hasDuplicate ) {
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        if ( byElement && elem ) {
        self.fireWith( this, arguments );
      id = internalKey;
    }


      jQuery.event.dispatch.call( elem, e );
      // If this is a positional/relative selector, check membership in the returned set
        parent.insertBefore( elem, next );

      val = curCSS( elem, name, styles );
    add = function( key, value ) {
            if ( !responseHeaders ) {

                jQuery( window ).unload( xhrOnUnloadAbort );
      hooks.set( this );
    // are the same in Safari causing offset.left to incorrectly be 0

        }
 * Sizzle CSS Selector Engine v1.10.2
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
    while ( (elem = results[i++]) ) {
        if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
          j = 0;
        return this;
    }
    type = type || "fx";
    if ( value !== undefined ) {
      // Remove generic event handler if we removed something and no more handlers exist
    }
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      }
      // #4087 - If origin and destination elements are the same, and this is
    }
      // If value is a function, invoke it and return its value
              responseHeaders = {};
  current = dataTypes.shift();
              }
    } else {
    return {
      } else {
      }
 * http://sizzlejs.com/
  return documentElement ? documentElement.nodeName !== "HTML" : false;
      if ( elem === results[ i ] ) {
          return false;
          while ( (matcher = elementMatchers[j++]) ) {
      },
  }

      return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
      // (avoids potential for endless recursion during removal of special event handlers)
    if ( e.isDefaultPrevented() ) {
      typeof selector === "string" && rneedsContext.test( selector ) ?
    // Allow new content to include elements from the context set
      // that element, do not do anything

      value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
              while ( (match = rheaders.exec( responseHeadersString )) ) {

              // Add to list of active xhrs callbacks
      Tween.propHooks._default.set( this );
      top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
        match = rquickExpr.exec( selector );
    }
 *
};
        j = duplicates.push( i );
        }
            if ( matcher( elem, context, xml ) ) {
      // To know if the callbacks have already been called at least once

    while( i-- ) {
        ret :
      if ( origCount && !handlers.length ) {
      event.preventDefault();
        jQuery( selector ) :
    }, true );
      if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
    //convert "normal" to computed value
      s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
                responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
  // Convert to each sequential dataType
              xhrCallbacks[ handle ] = callback;
    }
      left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
      }

 * Copyright 2013 jQuery Foundation, Inc. and other contributors

      }
      }
              results.push( elem );
      fired: function() {
  if ( !cache[ id ] ) {
      tmp = jQuery._data( elements[ i ], type + "queueHooks" );
        ( elem[ name ] = value );
        if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
    }
        selector || [],

        continue;
    if ( val === "normal" && name in cssNormalTransform ) {
    };
              }
  while ( current ) {
            }
    return this;
    };

    jQuery.error( "Invalid JSON: " + data );
 * Released under the MIT license
// Expose support vars for convenience
    }
      return true;
              break;
        return !!fired;
    // Avoid exposing jQuery metadata on plain JS objects when the object
      if ( tmp && tmp.empty ) {

          jQuery.removeEvent( elem, type, elemData.handle );
  }
      false
    // Force removal if there was no new content (e.g., from empty arguments)
      }
      val = cssNormalTransform[ name ];

            }

            xhr.onreadystatechange = callback;
  }
  },
      // Match html or make sure no context is specified for #id
  },
 * http://jquery.org/license
support = Sizzle.support = {};
    while ( j-- ) {
    },
            }
      }
    // is serialized using JSON.stringify
        count++;
    } else {
        }
};
    ).length;
    return i ? this : this.remove();

    }
  // Set traditional to true for jQuery <= 1.3.2 behavior.
            match = responseHeaders[ key.toLowerCase() ];
    if ( s.responseFields[ current ] ) {
          }
};

      if ( match && (match[1] || !context) ) {

 *

      results.splice( duplicates[ j ], 1 );

          }
    };
    cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
        tmp.empty.add( resolve );
      return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?


  },
  },
      contains = jQuery.contains( elem.ownerDocument, elem );

  if ( traditional === undefined ) {
          }
      jqXHR[ s.responseFields[ current ] ] = response;
        },

  offsetParent: function() {

  // Cross-browser xml parsing
 * Date: 2013-07-03
/**
    }
    "parent": function( elem ) {
          if ( outermost ) {

  }
      }
        ret :
        delete events[ type ];
jQuery.removeEvent = document.removeEventListener ?



    // Return, converting to number if forced or a qualifier was provided and val looks numeric
    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
          return match == null ? null : match;
    }

Tween.prototype.init.prototype = Tween.prototype;
    return this.map(function() {
        // HANDLE: $(html) -> $(array)
  parseXML: function( data ) {
 */
 * Sets document-related variables once based on the current document
  }
      return !Expr.pseudos["empty"]( elem );
            dirruns = dirrunsUnique;
  return self;

    }
        elem[ name ];
      }
  function( elem, type, handle ) {
  closest: function( selectors, context ) {
  detach: function( selector ) {
      // Append to fragment
    if ( extra === "" || extra ) {
  }
        },

        abort: function() {

      var offsetParent = this.offsetParent || docElem;
        if ( match[1] ) {
    var xml, tmp;
(function( window, undefined ) {
 * @param {Element|Object} [doc] An element or document object to use to set the document

    },
            cachedruns = ++matcherCachedRuns;
};
  // An object can be passed to jQuery.data instead of a key/value pair; this gets
    resolve();
    }
    }
    if ( elem.removeEventListener ) {
    var cur,
    return this.remove( selector, true );
      tmp = getAll( safe.appendChild( elem ), "script" );
      num = parseFloat( val );


    // Apply the dataFilter if provided
          if ( callback ) {
Tween.propHooks = {
      while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
          context = context instanceof jQuery ? context[0] : context;
    if ( !data || typeof data !== "string" ) {

 * @returns {Object} Returns the current document
  return results;

          }
jQuery.extend({
  // shallow copied over onto the existing cache
    return defer.promise( obj );
  },

      elem.removeEventListener( type, handle, false );
      i = 0,
  },

      return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
  // If an array was passed in, assume that it is an array of form elements.
        // Raw string
    if ( !prev && isSuccess && s.dataFilter ) {
            callback( undefined, true );
  _default: {
        offsetParent = offsetParent.offsetParent;

      return null;
var i,
 */
};
    // Element/input types
        }

  if ( typeof name === "object" || typeof name === "function" ) {
  }

    // Remove the expando if it's no longer used
    }
      l = this.length,

      // Preserve script evaluation history
    }
  if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
        getAllResponseHeaders: function() {
      response = s.dataFilter( response, s.dataType );
          }
    get: function( tween ) {
      }
          // scripts is true for back-compat
    }
  support,
setDocument = Sizzle.setDocument = function( node ) {

    "header": function( elem ) {

  Deferred: function( func ) {
    if ( pvt ) {
});
  propHooks: {
    if ( jQuery.isEmptyObject( events ) ) {
  } :
      ret = [],
  domManip: function( args, callback, allowIntersection ) {
      if ( contains ) {
    return val;
    // Serialize the form elements
          return state === 2 ? responseHeadersString : null;
    }
        }
      var result;
      return offsetParent || docElem;
          jQuery.merge( this, jQuery.parseHTML(
    try {
  cachedruns,
  var doc = node ? node.ownerDocument || node : preferredDoc,
/**
      return rheader.test( elem.nodeName );
        // Track unmatched elements for set filters
    var tuples = [
      cache[ id ] = jQuery.extend( cache[ id ], name );
var nodeHook, boolHook,
    tabIndex: {
      delete elemData.handle;
  function( elem, type, handle ) {
      pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?

        setGlobalEval( tmp );
  }
    jQuery.each( a, function() {
        },

      };

    });
            match[1],
      if ( window.DOMParser ) { // Standard
  Expr,
    parent = doc.defaultView;
 * Utility function for retrieving the text value of an array of DOM nodes
    },
        if ( bySet ) {
        // action, add listener, listener list, final state
    } else {
  rclass = /[\t\r\n\f]/g,
      get: function( elem ) {

    var name = "on" + type;
        jQuery( selectors, context || this.context ) :
    // Flatten any nested arrays
      }
});
      add( this.name, this.value );

    prev = current;
    }
      if ( tween.elem[ tween.prop ] != null &&
  }
            context && context.nodeType ? context.ownerDocument || context : document,
        tmp = new DOMParser();
  getText,

 * @param {Array|Element} elem

          // They will have gone through all possible matchers
        [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
      cache[ id ].data = jQuery.extend( cache[ id ].data, name );
  rreturn = /\r/g,
        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
      // removeData also checks for emptiness and clears the expando if empty

        0;
    args = core_concat.apply( [], args );


    });
        // Caches the header
    current = dataTypes.shift();
  });
        (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
});
            true
        xml = tmp.parseFromString( data , "text/xml" );
  isXML,
  // If no document and documentElement is available, return
 */
    "input": function( elem ) {
          if ( (elem = !matcher && elem) ) {
        [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
    }
  rfocusable = /^(?:input|select|textarea|button|object)$/i,
        // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
      // so use it instead of delete
    if ( elem.detachEvent ) {


      // Capture executables
// NOTE: we've included the "window" in window.getComputedStyle

        setRequestHeader: function( name, value ) {

}
        return tween.elem[ tween.prop ];

          ) );
      } else { // IE
  compile,
  if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
getText = Sizzle.getText = function( elem ) {
      return rinputs.test( elem.nodeName );
            matchedCount--;
        [ "notify", "progress", jQuery.Callbacks("memory") ]
  }
  rclickable = /^(?:a|area)$/i,
        // Use proper attribute retrieval(#12072)
      jQuery._removeData( elem, "events" );

    for ( ; i < l; i++ ) {
    var first, node, hasScripts,
      if ( scripts ) {
// because jsdom on node.js will break without it.
  } else {
          var lname = name.toLowerCase();
    if ( current ) {
var fxNow, timerId,
      }


        xml = new ActiveXObject( "Microsoft.XMLDOM" );
  outermostContext,
    return document;
  var node,
    },
          }
      ],

  ruseDefault = /^(?:checked|selected)$/i,
        var tabindex = jQuery.find.attr( elem, "tabindex" );
    }
      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
      scripts, doc, fragment,
        j = 0;
if ( window.getComputedStyle ) {
    // If traditional, encode the "old" way (the way 1.3.2 or older
          if ( !state ) {

  rfxtypes = /^(?:toggle|show|hide)$/,

// Create scrollLeft and scrollTop methods
          // HANDLE: $(html, props)
        xml.async = "false";
  sortInput,
  }
    ret = "",


      state = "pending",
  thisCache = cache[ id ];
  getSetAttribute = jQuery.support.getSetAttribute,

  },
      // detachEvent needed property on element, by name of that event, to properly expose it to GC
        // Always skip document fragments
      i = 0,
        while ( (elem = tmp[ j++ ]) ) {
  getStyles = function( elem ) {
    // did it), otherwise encode params recursively.
            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
      // There's only work to do if current dataType is non-auto
  rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
      // passing an empty string as a 3rd parameter to .css will automatically
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
          if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
        xml.loadXML( data );


    i = 0,
    "button": function( elem ) {
          // Lengthen the array for every element, matched or not
      promise = {

  getSetInput = jQuery.support.input;
        return tabindex ?

      if ( typeof elem[ name ] === core_strundefined ) {
        if ( cur.nodeType < 11 && (pos ?
      l = this.length,
          if ( rscriptType.test( elem.type || "" ) ) {
    return window.getComputedStyle( elem, null );
    for ( prefix in a ) {
            requestHeaders[ name ] = value;
      if ( current === "*" ) {
  rrun = /queueHooks$/,
      // attempt a parseFloat and fallback to a string if the parse fails
  var top = /Y/.test( prop );
            for ( match in context ) {
      }
  // Local document vars
  // Set our document
    nodeType = elem.nodeType;
      var name = elem.nodeName.toLowerCase();
          if ( seed ) {
        state: function() {
  // jQuery data() is stored in a separate object inside the object's internal data

          parseInt( tabindex, 10 ) :
  trigger: function( event, data, elem, onlyHandlers ) {
        elem[ name ] = null;
          pos.index(cur) > -1 :
      set = this,
            scripts.push( elem );
  };
      buildParams( prefix, a[ prefix ], traditional, add );
          }

  animationPrefilters = [ defaultPrefilter ],
      // so, simple values such as "10px" are parsed to Float.

              // Properties of context are called as methods if possible
    } catch( e ) {
  setDocument,
  document = doc;

      return name === "input" && elem.type === "button" || name === "button";
            unmatched.push( elem );
          return state;
  // cache in order to avoid key collisions between internal data and user-defined
jQuery.fn.extend({
          rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
    var handle, ontype, cur,
      }

      iNoClone = l - 1,
          }

    }
          return this;
        current = prev;
  tweeners = {
      // complex values such as "rotate(1rad)" are returned as is.
  jQuery.fn[ method ] = function( val ) {
              if ( jQuery.isFunction( this[ match ] ) ) {
      xml = undefined;
  document,
  docElem = doc.documentElement;
  if ( !nodeType ) {
    },
          }
        },
  // data.
  attr: function( name, value ) {
            0 :
      bubbleType, special, tmp, i,

          // Don't pass non-elements to Sizzle
      value = args[0],
        }
  curCSS = function( elem, name, _computed ) {
  }
        },

    "*": [function( prop, value ) {
      result = jQuery.css( tween.elem, tween.prop, "" );
    return jQuery.access( this, function( elem, method, val ) {
                this[ match ]( context[ match ] );
    }
  docElem,

    // If no nodeType, this is expected to be an array

        }
        always: function() {
  if ( !pvt ) {
    return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
            -1;
      eventPath = [ elem || document ],
      elem.detachEvent( name, handle );
          cur.nodeType === 1 &&
      isFunction = jQuery.isFunction( value );
      }
    var width, minWidth, maxWidth,


      // Convert response if prev dataType is non-auto and differs from current
      var tween = this.createTween( prop, value ),
      // Empty strings, null, undefined and "auto" are converted to 0.
      var win = getWindow( elem );

    if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
  documentIsHTML,
  // Support tests
    for ( ; (node = elem[i]); i++ ) {
    "text": function( elem ) {
      }
          deferred.done( arguments ).fail( arguments );
    if ( !thisCache.data ) {
  },
      }
      type = core_hasOwn.call( event, "type" ) ? event.type : event,
    }
            jQuery.find.matchesSelector(cur, selectors)) ) {

    }
      computed = _computed || getStyles( elem ),
  // Return the resulting serialization
        // Overrides response content-type header
      } else if ( prev !== "*" && prev !== current ) {
        target = tween.cur(),
      return !result || result === "auto" ? 0 : result;

              // ...and otherwise set as attributes
      jQuery.error( "Invalid XML: " + data );
  rbuggyQSA,
  documentIsHTML = !isXML( doc );
      // Do not traverse comment nodes
      var attr;

          return this;
      thisCache.data = {};

    }
      namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
  };

    // We can't cloneNode fragments that contain checked, in WebKit


  return s.join( "&" ).replace( r20, "+" );
        overrideMimeType: function( type ) {

        parts = rfxnum.exec( value ),
    },
      if ( val === undefined ) {
              } else {
    }
  rbuggyMatches,

      ret += getText( node );
      // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
      // Apply set filters to unmatched elements
        },
    }
  removeAttr: function( name ) {
  }


          cur = ret.push( cur );
    if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
    tmp = null;
      // getPropertyValue is only needed for .css('filter') in IE9, see #12537
};
          if ( !state ) {
        // Seek a direct converter
        unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
    set: function( tween ) {
        return win ? (prop in win) ? win[ prop ] :
                this.attr( match, context[ match ] );
    return xml;
  matches,
  // Support: IE>8
    }
      // use getAttribute instead to test this case
      matchedCount += i;
        then: function( /* fnDone, fnFail, fnProgress */ ) {

    return this.each(function() {
});
    cur = tmp = elem = elem || document;
jQuery.Event = function( src, props ) {
          break;
      return this.each(function( index ) {

      ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,

            s.mimeType = type;
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];

      // use step hook for back compat - use cssHook if its there - use .style if its
          win.document.documentElement[ method ] :
              }
  },
  contains,
  // If iframe document is assigned to "document" variable and if iframe has been reloaded,
  } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
      return elem.nodeName.toLowerCase() === "input" &&
      if ( bySet && i !== matchedCount ) {
          var fns = arguments;
    thisCache = thisCache.data;
      jQuery.removeAttr( this, name );


  // Allow instantiation without the 'new' keyword
        }
        var self = set.eq( index );
    return safe;
      style = elem.style;
function buildParams( prefix, obj, traditional, add ) {
          }

        // Starting value computation is required for potential unit mismatches
      // available and use plain properties where available
          elem[ method ];
            }


  // IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
    // Use textContent for elements
        elem.type === "text" &&
        j = 0;
          return jQuery.Deferred(function( newDefer ) {
  }
    });
// Hooks for boolean attributes
    // Don't do events on text and comment nodes
  if ( !(this instanceof jQuery.Event) ) {
      }
        if ( isFunction ) {
  },

  var name;
          return this;
        // If none found, seek a pair
        start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
      if ( jQuery.fx.step[ tween.prop ] ) {
      }
          }
  noop: function() {},
  // Instance-specific data
  // IE6-8 do not support the defaultView property so parent will be undefined
    // innerText usage removed for consistency of new lines (see #11153)
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
        while ( (matcher = setMatchers[j++]) ) {
            jQuery.each( tuples, function( i, tuple ) {

  },
boolHook = {
    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
    return new jQuery.Event( src, props );
    }
          args[0] = value.call( this, index, self.html() );

    if ( computed ) {

        },
        if ( !conv ) {
          rfxnum.exec( jQuery.css( tween.elem, prop ) ),
        jQuery.fx.step[ tween.prop ]( tween );



  expando = "sizzle" + -(new Date()),
  if ( parent && parent.attachEvent && parent !== parent.top ) {
    if ( typeof elem.textContent === "string" ) {
    },
          matcher( unmatched, setMatched, context, xml );
              var action = tuple[ 0 ],
  if ( data !== undefined ) {

  set: function( elem, value, name ) {
      return;
  }

        }
  cleanData: function( elems, /* internal */ acceptData ) {

  if ( jQuery.isArray( obj ) ) {

          for ( conv2 in converters ) {
        scale = 1,
      } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
      if ( win ) {
          return this;
  // Evaluates a script in a global context
  preferredDoc = window.document,
    parent.attachEvent( "onbeforeunload", function() {
      return elem.textContent;

        }
                fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
    thisCache[ jQuery.camelCase( name ) ] = data;
  prop: function( name, value ) {
    if ( value === false ) {
    }

    return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
        self.domManip( args, callback, allowIntersection );
    var elem, type, id, data,
      if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
    // Serialize array item.
        // Status-dependent callbacks

        maxIterations = 20;
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
        win.scrollTo(

  // Workarounds based on findings by Jim Driscoll
  dirruns = 0,
      setDocument();
    } else {
    // Position-in-collection

              // deferred[ done | fail | progress ] for forwarding actions to newDefer
  }
    return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
      // Remove boolean attributes when set to false

  // Event object
  },
      });
      i = 0,
        ret = jQuery.style( elem, name );
    jQuery.each( obj, function( i, v ) {
        statusCode: function( map ) {
            // If conv2 outputs current

      } else {
          !top ? val : jQuery( win ).scrollLeft(),
        // HANDLE: $(#id)
  // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
  done = 0,
    });
      // Traverse its children
    "first": createPositionalPseudo(function() {
        if ( seed ) {
              deferred[ tuple[1] ](function() {

  },
      jQuery.removeAttr( elem, name );
    // focus/blur morphs to focusin/out; ensure we're not firing them right now
  if ( src && src.type ) {

    }
      internalKey = jQuery.expando,
      }
      if ( traditional || rbracket.test( prefix ) ) {
          var code;
            tmp = conv2.split( " " );
      if ( start && start[ 3 ] !== unit ) {
        tween.elem[ tween.prop ] = tween.now;
          top ? val : jQuery( win ).scrollTop()
        } else {
  globalEval: function( data ) {
  classCache = createCache(),
  }
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
      return [ 0 ];
          // Reintegrate element matches to eliminate the need for sorting
                var returned = fn && fn.apply( this, arguments );
  // Check for both converted-to-camel and non-converted data property names

    } else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
    this.originalEvent = src;
  // Determine the position of an element within

      cache = jQuery.cache,

        // Treat each array item as a scalar.
          if ( map ) {
            if ( tmp[ 1 ] === current ) {
        // Trust units reported by jQuery.css
      }
        );
          elem = document.getElementById( match[2] );
    if ( data && jQuery.trim( data ) ) {
  tokenCache = createCache(),

        ret += getText( elem );
    }),
          if ( matchedCount > 0 ) {
                if ( returned && jQuery.isFunction( returned.promise ) ) {
  // If a data property was specified
  removeProp: function( name ) {
      // IE<8 needs the *property* name
      return;
    this.type = src.type;
  // the matched set of elements
    if ( l ) {
      deleteExpando = jQuery.support.deleteExpando,
      // A tribute to the "awesome hack by Dean Edwards"
        add( prefix, v );
            if ( state < 2 ) {

        unit = unit || start[ 3 ];
    }


      // We use execScript on Internet Explorer
  compilerCache = createCache(),
  /* Attributes
      }

            while ( i-- ) {
                  returned.promise()
  if ( typeof name === "string" ) {
    name = jQuery.propFix[ name ] || name;
      elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
    }

  index: function( elem ) {
      fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
      special = jQuery.event.special;
      // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right

              for ( code in map ) {
              // If prev can be converted to accepted input

  }
      } else {
          // Check parentNode to catch when Blackberry 4.6 returns
      // We use an anonymous function so that context is window
  hasDuplicate = false,
  ---------------------------------------------------------------------- */
    }
    "last": createPositionalPseudo(function( matchIndexes, length ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                    .done( newDefer.resolve )

    return this.each(function() {


    // Events bubbling up the document may have been marked as prevented

      first = fragment.firstChild;

      // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
      } else {
                // Lazy-add the new callback in a way that preserves old ones
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
        // Make sure we update the tween properties later on
};
        elem[ method ] = val;
          // nodes that are no longer in the document #6963
      // rather than jQuery in Firefox
  sortOrder = function( a, b ) {

  } else if ( nodeType === 3 || nodeType === 4 ) {
      return [ length - 1 ];
                setMatched[i] = pop.call( results );
                    .fail( newDefer.reject )
    // First Try to find as-is property data
      // try/catch handles cases where IE balks (such as removing a property on window)
    // Use defaultChecked and defaultSelected for oldIE
    if ( type.indexOf(".") >= 0 ) {
    // by a handler lower down the tree; reflect the correct value.
    // No argument, return index in parent

    for ( ; (elem = elems[i]) != null; i++ ) {
      // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
        // Item is non-scalar (array or object), encode its numeric index.
                statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
                converters[ "* " + tmp[ 0 ] ];
        parts = parts || [];

      }
          if ( elem && elem.parentNode ) {
      ( window.execScript || function( data ) {
    if ( a === b ) {
  // Support: IE<8
    return elem.nodeValue;
    }),
              }
                    .progress( newDefer.notify );
    ret = thisCache[ name ];
      try {
    } else {
      // Namespaced trigger; create a regexp to match event type in handle()
    this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
    if ( !elem ) {
      if ( fragment.childNodes.length === 1 ) {

      if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
        buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
              }
              if ( conv ) {

// Support: IE <=9
    }, method, val, arguments.length, null );
            // Handle the case where IE and Opera return items
        window[ "eval" ].call( window, data );
      hasDuplicate = true;
  // Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
  }

            }
                } else {

        this[ name ] = undefined;
      elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
      namespaces = type.split(".");
      src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;
      return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
        fragment = first;
      if ( acceptData || jQuery.acceptData( elem ) ) {

      }
            } else {
                // Condense equivalence converters
        // Iteratively approximate from a nonzero starting point
// Panic based approach to setting things on disconnected nodes
  };
            // by name instead of ID
      } )( data );
      return 0;
  support.attributes = assert(function( div ) {
  // Do not include comment or processing instruction nodes
    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
          }
                  newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
    // Test for null|undefined property data
        delete this[ name ];
    }
      type = namespaces.shift();

    }
      }

        // Remember the original values
    });
              // Execute the appropriate callbacks
                if ( conv === true ) {
        start = +target || 1;

});
            if ( elem.id !== match[2] ) {
    }
    }
    div.className = "i";

      return [ argument < 0 ? argument + length : argument ];

                }
    if ( ret == null ) {
      } catch( e ) {}

      namespaces.sort();
  // Event type


        id = elem[ internalKey ];
        width = style.width;

              jqXHR.always( map[ jqXHR.status ] );
                  conv = converters[ conv2 ];

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {

              return rootjQuery.find( selector );
  },
    return 0;
    return !div.getAttribute("className");
  return ret;
    }),
          // Discard index placeholder values to get only actual matches
              });

    });
    return name;
    }
  } else {
    // index in selector
      if ( first ) {
        data = id && cache[ id ];
        minWidth = style.minWidth;
  } else if ( !traditional && jQuery.type( obj ) === "object" ) {
            }

        do {
  set: function( tween ) {
function getWindow( elem ) {
            }

  },
  });
};

          setMatched = condense( setMatched );
            });
      // Try to find the camelCased property
  },
  }
    ontype = type.indexOf(":") < 0 && "on" + type;
    this.type = src;
    if ( typeof elem === "string" ) {
        scripts = jQuery.map( getAll( fragment, "script" ), disableScript );

        maxWidth = style.maxWidth;
    // Serialize object item.
          }
                // Otherwise, insert the intermediate dataType
          // If previous iteration zeroed out, double until we get *something*
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
  return jQuery.isWindow( elem ) ?

  // Convert dashed to camelCase; used by the css and data modules



    "even": createPositionalPseudo(function( matchIndexes, length ) {
        }
            fns = null;
      ret = thisCache[ jQuery.camelCase( name ) ];

};

  }
      return jQuery.inArray( this[0], jQuery( elem ) );
        hasScripts = scripts.length;
        if ( data ) {

    for ( name in obj ) {
          return this;
                } else if ( converters[ conv2 ] !== true ) {
          // Use a string for doubling factor so we don't accidentally see scale as unchanged below
      tween.elem[ tween.prop ] = tween.now;
    elem :
            // Otherwise, we inject the element directly into the jQuery object
  // Microsoft forgot to hump their vendor prefix (#9572)
  // General-purpose constants
  /* getElement(s)By*
Expr = Sizzle.selectors = {
      var i = 0;

          }).promise();
    }
  addClass: function( value ) {
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
    // Caller can pass in a jQuery.Event object, Object, or just an event type string

    }

          if ( data.events ) {
        // Put in the new values to get a computed value out
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
        },
                  current = tmp[ 0 ];
          scale = scale || ".5";
    }
    elem.nodeType === 9 ?
            this.length = 1;
  camelCase: function( string ) {
  strundefined = typeof undefined,
  ---------------------------------------------------------------------- */

      for ( ; i < length; i += 2 ) {
        // Add matches to results
        },
  } else {
    var classes, elem, cur, clazz, j,
  var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;
    event = event[ jQuery.expando ] ?
  // Put explicitly provided properties onto the event object

        // Use the original fragment for the last item instead of the first because it can end up
            for ( type in data.events ) {
        style.minWidth = style.maxWidth = style.width = ret;
    }

                  dataTypes.unshift( tmp[ 1 ] );

  }
      elem.defaultView || elem.parentWindow :
            this[0] = elem;
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  MAX_NEGATIVE = 1 << 31,

  // Can be adjusted by the user
        matchIndexes.push( i );
        push.apply( results, setMatched );
        // Get a promise for this deferred
    ret = thisCache;
      i = 0,

      event :
  if ( props ) {
    // Locate the position of the desired element
        // being emptied incorrectly in certain situations (#8070).
              if ( special[ type ] ) {
        ret = computed.width;

        // Cancel the request
                }
          // Adjust and apply
};
      false;
          }
  },

  // Check if getElementsByTagName("*") returns only elements
  cacheLength: 50,
      }

        // If obj is provided, the promise aspect is added to the object
  }
      len = this.length,
  jQuery.expr.attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
      new jQuery.Event( type, typeof event === "object" && event );
    jQuery.extend( this, props );
    return jQuery.inArray(
        for ( ; i < l; i++ ) {
                jQuery.event.remove( elem, type );

  } else {
        abort: function( statusText ) {
                break;
          start = start / scale;

}


  // Instance methods
  support.getElementsByTagName = assert(function( div ) {

      return matchIndexes;
        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        promise: function( obj ) {

      proceed = typeof value === "string" && value;
    function( elem, name, isXML ) {

  }
      // If it receives a jQuery object, the first element is used
          node = fragment;

        // Revert the changed values
    // Serialize scalar item.
          var finalText = statusText || strAbort;
              }
          jQuery.style( tween.elem, prop, start + unit );
jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
          this.context = document;
  nodeName: function( elem, name ) {
  hasOwn = ({}).hasOwnProperty,
    div.appendChild( doc.createComment("") );
  createPseudo: markFunction,
    }),
        if ( outermost && !seed && setMatched.length > 0 &&
          return obj != null ? jQuery.extend( obj, promise ) : promise;
  return ret;

      var fn = jQuery.expr.attrHandle[ name ],
    // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      elem.jquery ? elem[0] : elem, this );

              // This is a shortcut to avoid jQuery.event.remove's overhead
        style.width = width;
    add( prefix, obj );
          if ( transport ) {
            }

  var cssFn = jQuery.fn[ name ];
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
          this.selector = selector;
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  arr = [],
    return !div.getElementsByTagName("*").length;


          ( matchedCount + setMatchers.length ) > 1 ) {
        }
}
    if ( jQuery.isFunction( value ) ) {
        ret = isXML ?
    event.isTrigger = onlyHandlers ? 2 : 3;
  // Create a timestamp if incoming event doesn't have one
  },
          if ( i !== iNoClone ) {
              } else {
        style.minWidth = minWidth;
  }
            transport.abort( finalText );
          }
        // Update scale, tolerating zero or NaN from tween.cur()
  jQuery.fn[ name ] = function( speed, easing, callback ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
          return this;
  },
  pop = arr.pop,
  });
  match: matchExpr,
    "odd": createPositionalPseudo(function( matchIndexes, length ) {

      },

      return this.each(function( j ) {
          undefined :
    event.namespace = namespaces.join(".");
  this.timeStamp = src && src.timeStamp || jQuery.now();

            node = jQuery.clone( node, true, true );
                jQuery.removeEvent( elem, type, data.handle );
        style.maxWidth = maxWidth;
}
          }
        }
        // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
    return speed == null || typeof speed === "boolean" ?
    // margin is only for outerHeight, outerWidth
        }

  push_native = arr.push,


      var i = 1;
          Sizzle.uniqueSort( results );
      deferred = {};
function internalRemoveData( elem, name, pvt ) {
        jQuery( this ).addClass( value.call( this, j, this.className ) );
          /* jshint eqeqeq: false */
    event.namespace_re = event.namespace ?

  add: function( selector, context ) {

              }
      }
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
          done( 0, finalText );

        } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
      cssFn.apply( this, arguments ) :
    jQuery.fn[ funcName ] = function( margin, value ) {

  // args is for internal usage only
  push = arr.push,
  // Check if getElementsByClassName can be trusted
  attrHandle: {},
      for ( ; i < length; i += 2 ) {
        }

  if ( !jQuery.acceptData( elem ) ) {
      });
          (jQuery.expr.attrHandle[ name ] = undefined) !=
      new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
  // Mark it as fixed
    var set = typeof selector === "string" ?
            // Keep references to cloned scripts for later restoration
            }
    }
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
          return this;
        // Apply converter (if not an equivalence)
      }
      this.animate( genFx( name, true ), speed, easing, callback );
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
      // HANDLE: $(expr, $(...))
  each: function( obj, callback, args ) {
  slice = arr.slice,
  support.getElementsByClassName = assert(function( div ) {

        matchIndexes.push( i );
      }
    // Keep pipe for back-compat
    return;
    }
            getter( elem, name, isXML ) ?
      null;
  this[ jQuery.expando ] = true;
        jQuery( selector, context ) :
            if ( hasScripts ) {
          }

  "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
        }
        if ( conv !== true ) {

  };
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
      } else if ( !context || context.jquery ) {
    var value,
  // Use a stripped-down indexOf if we can't use a native one
    div.innerHTML = "<div class='a'></div><div class='a i'></div>";
  find: {},
      }

    promise.pipe = promise.then;
  }



};
        jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
              jQuery.merge( scripts, getAll( node, "script" ) );

    return ret;

      };

      // Update tween properties
});

        return ( context || rootjQuery ).find( selector );
      i = 0,
  indexOf = arr.indexOf || function( elem ) {


      return matchIndexes;
      // Override manipulation of globals by nested matchers


    if ( proceed ) {
            name.toLowerCase() :
    // Clean up the event in case it is being reused

      all = jQuery.merge( this.get(), set );
            }
          // Remove cache only if it was not already removed by jQuery.event.remove
  };
  // Handle event binding

          // Unless errors are allowed to bubble, catch and return them
      if ( parts ) {

      return jQuery.access( this, function( elem, type, value ) {

      length = obj.length,
    var i = 0,
    // Support: Safari<4
  relative: {
    }),
      if ( outermost ) {
    // Add list-specific methods
  var thisCache, i,
      // The disjunction here is for better compressibility (see removeClass)
            null;
    event.result = undefined;
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding

          }
          if ( cache[ id ] ) {
} else if ( document.documentElement.currentStyle ) {
  jQuery.fn[ name ] = function( data, fn ) {
    // Attach deferreds
          if ( conv && s[ "throws" ] ) {
        start = tween.start = +start || +target || 0;
jQuery.fn.extend({
        var doc;
      // HANDLE: $(expr, context)
      isArray = isArraylike( obj );
      len = this.length;
    // Catch class over-caching
    ">": { dir: "parentNode", first: true },

        dirruns = dirrunsUnique;
    jQuery.each( tuples, function( i, tuple ) {
    isNode = elem.nodeType,
      classes = ( value || "" ).match( core_rnotwhite ) || [];
      jQuery.expr.attrHandle[ name ] = fn;
    if ( !event.target ) {
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    return this.pushStack( jQuery.unique(all) );


  getStyles = function( elem ) {
    return arguments.length > 0 ?
    deferred.promise( jqXHR ).complete = completeDeferred.add;
            response = conv( response );
        tween.unit = unit;
  fadeTo: function( speed, to, easing, callback ) {

      // (which is just equivalent to: $(context).find(expr)

    for ( ; i < len; i++ ) {
    div.firstChild.className = "i";
    " ": { dir: "parentNode" },
    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
        outermostContext = contextBackup;
      var list = tuple[ 2 ],


      return ret;
      event.target = elem;
jQuery.Event.prototype = {
  },
          callback.call( this[i], node, i );
            delete cache[ id ];
    return elem.currentStyle;
      this.on( name, null, data, fn ) :
    jqXHR.success = jqXHR.done;
          } else {
        // If a +=/-= token was provided, we're doing a relative animation

        if ( jQuery.isWindow( elem ) ) {
      } else {
    if ( args ) {
      if ( this[i] === elem ) {
    // Support: Opera<10
    "+": { dir: "previousSibling", first: true },
      var i = argument < 0 ? argument + length : argument;
      }
        stateString = tuple[ 3 ];
    // See jQuery.data for more information
      for ( ; i < len; i++ ) {
    } :
    }
  isDefaultPrevented: returnFalse,

        }

  };
      this.trigger( name );
    jqXHR.error = jqXHR.fail;
            try {
        tween.end = parts[ 1 ] ?
    // show any hidden elements after setting opacity to 0
          // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
        return this.constructor( context ).find( selector );
      if ( isArray ) {
        return i;
    // Catch gEBCN failure to find non-leading classes
    "~": { dir: "previousSibling" }
      for ( ; --i >= 0; ) {


    cache = isNode ? jQuery.cache : elem,
        elem = this[ i ];
    function( elem, name, isXML ) {

  isPropagationStopped: returnFalse,
  addBack: function( selector ) {

            // IE does not allow us to delete expando properties from nodes,

  };

              response = conv( response );
          start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
    return this.filter( isHidden ).css( "opacity", 0 ).show()
          // isn't a whole lot we can do. See pull request at this URL for discussion:
      }
        for ( ; i < length; i++ ) {
      }
    return div.getElementsByClassName("i").length === 2;
  },
        matchIndexes.push( i );
      return unmatched;
      // promise[ done | fail | progress ] = list.add
    id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
        cur = elem.nodeType === 1 && ( elem.className ?
      return isXML ?
    // Clone any incoming data and prepend the event, creating the handler arg list
  isImmediatePropagationStopped: returnFalse,
    return this.add( selector == null ?
        if ( hasScripts ) {
            // nor does it have a removeAttribute function on Document nodes;
  curCSS = function( elem, name, _computed ) {
});
    // Remove hash character (#7531: and string promotion)
            } catch ( e ) {
          +parts[ 2 ];

          // https://github.com/jquery/jquery/pull/764

          value = callback.apply( obj[ i ], args );
    }
  });

      }
    };
      promise[ tuple[1] ] = list.add;

          ( " " + elem.className + " " ).replace( rclass, " " ) :
        undefined :
    data = data == null ?

      this.prevObject : this.prevObject.filter(selector)
          doc = scripts[ scripts.length - 1 ].ownerDocument;
            // we must handle all of these cases
    var left, rs, rsLeft,

    // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
              return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
      }
      // animate to the value specified
          return elem.document.documentElement[ "client" + name ];
    // HANDLE: $(DOMElement)

    return -1;

  preFilter: {
      return matchIndexes;


  // If there is already no cache entry for this object, there is no
          " "
        elem[ jQuery.camelCase( "default-" + name ) ] ?
      [ event ] :
  preventDefault: function() {
    );

            if ( deleteExpando ) {
      computed = _computed || getStyles( elem ),
jQuery.fn.extend({
    // Handle falsy url in the settings object (#10093: consistency with old signature)
            }

      .end().animate({ opacity: to }, speed, easing, callback );
        }
    } else if ( selector.nodeType ) {
          if ( value === false ) {
  },
  // Support: IE<10
    "ATTR": function( match ) {
    }),
  return bySet ?
      // Handle state
  // purpose in continuing
        );
          name.toLowerCase() :
      jQuery.makeArray( data, [ event ] );
    var e = this.originalEvent;
  }
          // Reenable scripts
              delete elem[ internalKey ];
      ret = computed ? computed[ name ] : undefined,
  hover: function( fnOver, fnOut ) {
    // We also use the url parameter if available
          }
      return tween;
  },

      this.context = this[0] = selector;
            break;

  // Check if getElementById returns elements by name
      match[1] = match[1].replace( runescape, funescape );

    markFunction( superMatcher ) :
      if ( stateString ) {
  if ( !cache[ id ] ) {

          null;


});
          jQuery.map( scripts, restoreScript );

      style = elem.style;
    return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
    s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
        }
    }]
  animate: function( prop, speed, easing, callback ) {
        // Get document width or height
      this.length = 1;
          }
  booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
  // The broken getElementById methods don't pick up programatically-set names,

    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
    superMatcher;
        list.add(function() {
    return;
        if ( cur ) {
    };
    // Allow special events to draw outside the lines
    this.isDefaultPrevented = returnTrue;


            } else if ( typeof elem.removeAttribute !== core_strundefined ) {

  },

      }
  };
    var empty = jQuery.isEmptyObject( prop ),
        if ( elem.nodeType === 9 ) {
      return this;
        }

  // so use a roundabout getElementsByName test
      // Move the given value to match[3] whether quoted or unquoted
      var i = argument < 0 ? argument + length : argument;
}
          // state = [ resolved | rejected ]
  }
          j = 0;
});
    special = jQuery.event.special[ type ] || {};
    if ( !e ) {
function sibling( cur, dir ) {
          // Evaluate executable scripts on first document insertion
              elem.removeAttribute( internalKey );
    // Avoid setting ret to empty string here

    // Alias method option to type as per ticket #12004
    }

      optall = jQuery.speed( speed, easing, callback ),
          doc = elem.documentElement;

      } else {
  // Regular expressions
  support.getById = assert(function( div ) {
      match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );
      for ( ; ++i < length; ) {

          state = stateString;

          while ( (clazz = classes[j++]) ) {

    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
  do {
          for ( i = 0; i < hasScripts; i++ ) {

    // so we don't default to auto
  bind: function( types, data, fn ) {
    s.type = options.method || options.type || s.method || s.type;
  }
// Animations created synchronously will run synchronously
      doAnimation = function() {

    // HANDLE: $(function)
        for ( i in obj ) {

    docElem.appendChild( div ).id = expando;

        matchIndexes.push( i );
compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {

  if ( name ) {
            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
// fix oldIE attroperties
      return;
    }
    cur = cur[ dir ];
            node = scripts[ i ];
            } else {
    if ( ret == null && style && style[ name ] ) {
    return this.on( types, null, data, fn );


function createFxNow() {
        // Operate on a copy of prop so per-property easing won't be lost
          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
    // Shortcut for document ready
          value = callback.apply( obj[ i ], args );
  // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
    return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
      if ( match[2] === "~=" ) {
      }
  var i,
        // [ reject_list | resolve_list ].disable; progress_list.lock

              cur += clazz + " ";
if ( !getSetInput || !getSetAttribute ) {
    }

  } while ( cur && cur.nodeType !== 1 );
            if ( rscriptType.test( node.type || "" ) &&
              elem[ internalKey ] = null;
      ret = style[ name ];
  },
    // Extract dataTypes list
  return { state: "success", data: response };
  setTimeout(function() {
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );
          // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
    } else if ( jQuery.isFunction( selector ) ) {

  whitespace = "[\\x20\\t\\r\\n\\f]",
  });
        match[3] = " " + match[3] + " ";
      return matchIndexes;
    setMatchers = [],
        }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
    thisCache = pvt ? cache[ id ] : cache[ id ].data;
            }
  jQuery.attrHooks.value = {

    // If preventDefault exists, run it on the original event

              !jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
            }
    }
  unbind: function( types, fn ) {
    s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];
}
    fxNow = undefined;

          return Math.max(
      return rootjQuery.ready( selector );
          if ( value === false ) {
  // http://www.w3.org/TR/css3-syntax/#characters

      }
    })
    elementMatchers = [],
      }

          }
    set: function( elem, value, name ) {
    // Determine event propagation path in advance, per W3C events spec (#9951)
    if ( e.preventDefault ) {
  return cur;



    return this.off( types, null, fn );

// Install script dataType
  });
        // Empty animations, or finishing resolves immediately
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
    }
            break;
  characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
  // ID find and filter

  }
    cached = compilerCache[ selector + " " ];

    if ( thisCache ) {
          elem.className = jQuery.trim( cur );
      if ( jQuery.nodeName( elem, "input" ) ) {
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
      e.preventDefault();
}
              if ( node.src ) {
            core_deletedIds.push( id );
    // From the awesome hack by Dean Edwards
  },
    // A cross-domain request is in order when we have a protocol:host:port mismatch
jQuery.ajaxSetup({
  return ( fxNow = jQuery.now() );
        if ( empty || jQuery._data( this, "finish" ) ) {
            elem.body[ "offset" + name ], doc[ "offset" + name ],

          }

  if ( support.getById ) {
      return match.slice( 0, 4 );
};

      // deferred[ resolve | reject | notify ]


        // Does not return so that setAttribute is also used
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {


                // Hope ajax is available...
          }
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    if ( s.crossDomain == null ) {
  accepts: {
}
          anim.stop( true );
            doc[ "client" + name ]
    if ( selector.selector !== undefined ) {
        }
  // Loosely modeled on CSS identifier characters
    Expr.find["ID"] = function( id, context ) {
    },

  if ( !cached ) {
      deferred[ tuple[0] ] = function() {
      // Support array or space separated string names for data keys
        }
        elem.defaultValue = value;

    // Support: IE
jQuery.each({
                jQuery._evalUrl( node.src );
        }

  delegate: function( selector, types, data, fn ) {
      parts = rurl.exec( s.url.toLowerCase() );
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"

        }
          );
      this.selector = selector.selector;
      }
  // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
      if ( typeof context.getElementById !== strundefined && documentIsHTML ) {

Expr.pseudos["nth"] = Expr.pseudos["eq"];
    // Generate a function of recursive functions that can be used to check each element
        deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
      if ( !jQuery.isArray( name ) ) {
      }
      } else {
      bubbleType = special.delegateType || type;
    // Otherwise set the returnValue property of the original event to false
  parent: function( elem ) {
              } else {
      }
    // If we're not dealing with a regular pixel number
    return this.on( types, selector, data, fn );
      s.crossDomain = !!( parts &&
  },
function createTween( value, prop, animation ) {
      };
        }
      this.context = selector.context;

  // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        var m = context.getElementById( id );
    "CHILD": function( match ) {

    if ( !group ) {
        return this;

    }
        // Use nodeHook if defined (#1954); otherwise setAttribute is fine
      if ( !rfocusMorph.test( bubbleType + type ) ) {
    } else {
    var parent = elem.parentNode;
                jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
    }
    // but a number that has a weird ending, we need to convert it to pixels
  },
        ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
  contents: {
  var tween,
      doAnimation.finish = doAnimation;

    }
    // A special, fast, case for the most common use of each
  identifier = characterEncoding.replace( "w", "w#" ),
        // Check parentNode to catch when Blackberry 4.6 returns
      /* matches from matchExpr["CHILD"]
// Add button/input type pseudos
      group = tokenize( selector );
      };
        // try the string as a key before any manipulation

        return nodeHook && nodeHook.set( elem, value, name );
        cur = cur.parentNode;
      e.returnValue = false;
    return parent && parent.nodeType !== 11 ? parent : null;
              }
  },
    // but not position css attributes, as those are proportional to the parent element instead
  undelegate: function( selector, types, fn ) {
          ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
    script: /(?:java|ecma)script/
    collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),

        return value === undefined ?

    } else {

        // nodes that are no longer in the document #6963
        1 type (only|nth|...)
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
    }
      deferred[ tuple[0] + "With" ] = list.fireWith;
        if ( name in thisCache ) {
    return this;
      }
      }
    }
  },
            }

    // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
    // ( namespace ) or ( selector, types [, fn] )
            ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
  },
    index = 0,
    return empty || optall.queue === false ?
          // Get width or height on the element, requesting but not forcing parseFloat
    return jQuery.makeArray( selector, this );
      if ( isArray ) {
  // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
        return m && m.parentNode ? [m] : [];
        2 what (child|of-type)
  Expr.pseudos[ i ] = createInputPseudo( i );
    i = group.length;
    });
          name = [ name ];
  },
    }
      for ( ; cur; cur = cur.parentNode ) {
  },
  parents: function( elem ) {
          }
  _evalUrl: function( url ) {
    if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
    return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
      );
  converters: {
    length = collection.length;
      this.each( doAnimation ) :
          jQuery.css( elem, type, extra ) :
  },
        for ( ; i < length; i++ ) {
  attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
      }
        3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
}
    while ( i-- ) {

        } else {

  };
        eventPath.push( cur );
  stopPropagation: function() {
    return jQuery.dir( elem, "parentNode" );
        }
    return jQuery.ajax({

  }
    }
    "text script": function( text ) {
  for ( ; index < length; index++ ) {
      this.queue( optall.queue, doAnimation );


          value = callback.call( obj[ i ], i, obj[ i ] );
    "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
    };
        4 xn-component of xn+y argument ([+-]?\d*n|)
for ( i in { submit: true, reset: true } ) {
      cached = matcherFromTokens( group[i] );
    // Make the deferred a promise

  removeClass: function( value ) {
}
        tmp = cur;
    var e = this.originalEvent;
  },

      url: url,
      // Remember the original values
});

      jQuery.globalEval( text );
    if ( (tween = collection[ index ].call( animation, prop, value )) ) {
  },
          // Set width or height on the element
  // Start with an empty selector


    Expr.filter["ID"] = function( id ) {
        5 sign of xn-component
  Expr.pseudos[ i ] = createButtonPseudo( i );
      if ( cached[ expando ] ) {
    promise.promise( deferred );
          // split the camel cased version by spaces unless a key with the spaces exists
    var classes, elem, cur, clazz, j,

      }

  parentsUntil: function( elem, i, until ) {
        // Fix #11809: Avoid leaking memory
      type: "GET",
      left = style.left;
var
    // Convert data if not already a string
      return text;

  stop: function( type, clearQueue, gotoEnd ) {
          jQuery.style( elem, type, value, extra );
  selector: "",
          if ( value === false ) {
  // Prefer arguments quoted,
      var attrId = id.replace( runescape, funescape );
        6 x of xn-component
}
        setMatchers.push( cached );

          name = jQuery.camelCase( name );
      i = 0,
// IE6/7 do not support getting/setting some attributes with get/setAttribute

    this.isPropagationStopped = returnTrue;
    return jQuery.dir( elem, "parentNode", until );
        fragment = first = null;
      dataType: "script",
      rs = elem.runtimeStyle;
  // Document location
    if ( s.data && s.processData && typeof s.data !== "string" ) {
    }
      // we're done with this property
    var stopQueue = function( hooks ) {
      }, type, chainable ? margin : undefined, chainable, null );

            break;
  //   then not containing pseudos/brackets,
      return function( elem ) {
        7 sign of y-component

      } else {
    // Call given func if any
          if ( name in thisCache ) {
      len = this.length,
if ( !getSetAttribute ) {
      // Only add window if we got to document (e.g., not plain obj or detached DOM)
    if ( !e ) {
  },
      }
      async: false,
      rsLeft = rs && rs.left;
  ajaxLocParts,
      s.data = jQuery.param( s.data, s.traditional );
  }
      return tween;
      var stop = hooks.stop;
    };
  // The default length of a jQuery object is 0
          }
  //   then attribute selectors/non-parenthetical expressions,
        return elem.getAttribute("id") === attrId;
        8 y of y-component
// Easy API for creating new setFilters
        elementMatchers.push( cached );
    if ( func ) {
            name = [ name ];
      proceed = arguments.length === 0 || typeof value === "string" && value;

      if ( tmp === (elem.ownerDocument || document) ) {
      return;
  next: function( elem ) {
    }
      global: false,

  ajaxLocation,
    }
});
    }
      delete hooks.stop;
  });
  length: 0,
        }
  //   then anything else
      };
      */
function setFilters() {}
      }
      func.call( deferred, deferred );
          } else {

  // Use this for any attribute in IE6/7
        eventPath.push( tmp.defaultView || tmp.parentWindow || window );
    }
    return sibling( elem, "nextSibling" );

      "throws": true
      // Put in the new values to get a computed value out
  ajax_nonce = jQuery.now(),


  }
      stop( gotoEnd );
});

      } else {
  // These preferences are here to reduce the number of selectors
    };
      match[1] = match[1].toLowerCase();
setFilters.prototype = Expr.filters = Expr.pseudos;
    }
    }
            name = name.split(" ");
    if ( jQuery.isFunction( value ) ) {
  // This fixes almost every IE6/7 issue
      }
    // If stopPropagation exists, run it on the original event
  },
    return this;
    });
      if ( rsLeft ) {

    // Apply prefilters
// Handle cache's special case and global
}
    };
// Limit scope pollution from any deprecated API
  toArray: function() {
        for ( i in obj ) {
  //   needing tokenize in the PSEUDO preFilter
  } else {

Expr.setFilters = new setFilters();


          }
      return this.each(function( j ) {
  nodeHook = {
    }
    if ( e.stopPropagation ) {
  prev: function( elem ) {
  }
  }
        rs.left = elem.currentStyle.left;
  ajax_rquery = /\?/,
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
jQuery.ajaxPrefilter( "script", function( s ) {


// (function() {
    return core_slice.call( this );
          value = callback.call( obj[ i ], i, obj[ i ] );
  pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",
    // Support: IE6/7
      if ( match[1].slice( 0, 3 ) === "nth" ) {

    // Cache the compiled function
    // All done!
        }
        jQuery( this ).removeClass( value.call( this, j, this.className ) );
    set: function( elem, value, name ) {

      e.stopPropagation();
    return sibling( elem, "previousSibling" );
});
});
      }
  rhash = /#.*$/,

  if ( s.cache === undefined ) {
function Animation( elem, properties, options ) {
    if ( typeof type !== "string" ) {

  },


    // getElementById is not reliable as a find shortcut
        // nth-* requires argument
function tokenize( selector, parseOnly ) {
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
    return deferred;
      } else {
      });
      // Set the existing or create a new attribute node
    // Fire handlers on the event path
    }
  },

jQuery.fn.extend({
      style.left = name === "fontSize" ? "1em" : ret;
  rts = /([?&])_=[^&]*/,
    // If request was aborted inside a prefilter, stop there
    s.cache = false;
  var result,
      gotoEnd = clearQueue;
// The number of elements contained in the matched element set

          if ( value === false ) {
  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    delete Expr.find["ID"];
        if ( !match[3] ) {
  var matched, match, tokens, type,
  }
  },
        // If "name" is an array of keys...
    }
      var ret = elem.getAttributeNode( name );
    i = 0;

  nextAll: function( elem ) {
// Support: IE<8
  wrapAll: function( html ) {
      ret = style.pixelLeft + "px";
  rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
    if ( state === 2 ) {
  }
    stopped,
      clearQueue = type;
jQuery.fn.size = function() {
  // Get the Nth element in the matched element set OR
            break;
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

          Sizzle.error( match[0] );
    soFar, groups, preFilters,
  return cached;

        // When data is initially created, via ("key", "val") signature,
    if ( proceed ) {
      if ( !ret ) {
    while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
    // Support: IE
    return jQuery.dir( elem, "nextSibling" );
// Manipulating tables requires a tbody
    if ( jQuery.isFunction( html ) ) {

  // #7653, #8125, #8152: local protocol detection
      return jqXHR;
  if ( s.crossDomain ) {
    index = 0,
      type = undefined;
  return this.length;
  // Get the whole matched element set as a clean array
          }

    Expr.filter["ID"] =  function( id ) {
        }
    cached = tokenCache[ selector + " " ];
};
  // Deferred helper
        // keys will be converted to camelCase.
      classes = ( value || "" ).match( core_rnotwhite ) || [];
        elem.setAttributeNode(

    // Set the cancelBubble property of the original event to true
  },
function manipulationTarget( elem, content ) {
      return this.each(function(i) {
      // Revert the changed values
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    }
    s.type = "GET";
    length = animationPrefilters.length,
    }
};
  get: function( num ) {
        }
  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
      var attrId = id.replace( runescape, funescape );



  when: function( subordinate /* , ..., subordinateN */ ) {
        // Since there is no way to tell _how_ a key was added, remove

          (ret = elem.ownerDocument.createAttribute( name ))
      event.type = i > 1 ?
    e.cancelBubble = true;
  prevAll: function( elem ) {
  return jQuery.nodeName( elem, "table" ) &&
        jQuery(this).wrapAll( html.call(this, i) );
      style.left = left;
  rnoContent = /^(?:GET|HEAD)$/,

    s.global = false;
    deferred = jQuery.Deferred().always( function() {
    if ( clearQueue && type !== false ) {

    return num == null ?
      }
  rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
      return function( elem ) {
        // numeric x and y parameters for Expr.filter.CHILD
  if ( cached ) {
function multipleContexts( selector, contexts, results ) {
    var i = 0,
        // both plain key and camelCase key. #12786
      for ( ; i < len; i++ ) {
        );
        bubbleType :
  },
    return jQuery.dir( elem, "previousSibling" );
    jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?
      });
      if ( rsLeft ) {
  rprotocol = /^\/\//,
    // We can fire global events as of now if asked to
  }
      // don't match elem in the :animated selector
      this.queue( type || "fx", [] );
jQuery.fn.andSelf = jQuery.fn.addBack;

    }

        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
        // remember that false/true cast respectively to 0/1
    return parseOnly ? 0 : cached.slice( 0 );
  var i = 0,
      resolveValues = core_slice.call( arguments ),
        // This will only penalize the array argument path.
        elem = this[ i ];
      }
        special.bindType || type;
  stopImmediatePropagation: function() {
  },

    }
        rs.left = rsLeft;
  rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    fireGlobals = s.global;
});
      delete tick.elem;
    }

      // Return a 'clean' array

  rsibling = new RegExp( whitespace + "*[+~]" ),
        return node && node.value === attrId;
        match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
  }
    len = contexts.length;
      length = resolveValues.length,
        name = name.concat( jQuery.map( name, jQuery.camelCase ) );
        // This expression is here for better compressibility (see addClass)


    this.isImmediatePropagationStopped = returnTrue;
  nextUntil: function( elem, i, until ) {
    elem.getElementsByTagName("tbody")[0] ||

      }



    }),

// })();
      this.toArray() :
    return obj;
  rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),
      };
        match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

  for ( ; i < len; i++ ) {

      }
        cur = elem.nodeType === 1 && ( elem.className ?
      ret.value = value += "";
      // jQuery handler
    this.stopPropagation();
    return jQuery.dir( elem, "nextSibling", until );
      elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
    if ( this[0] ) {
    }
  // Keep a copy of the old load method
    // Watch for a new set of requests
// Bind script tag hack transport
    tick = function() {
    return this.each(function() {
if ( typeof module === "object" && module && typeof module.exports === "object" ) {

  },

    };

  soFar = selector;
    Sizzle( selector, contexts[i], results );
      // the count of uncompleted subordinates

          ( " " + elem.className + " " ).replace( rclass, " " ) :

      handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
  }
  },
    elem;
      // The elements to wrap the target around

  _load = jQuery.fn.load,
    if ( fireGlobals && jQuery.active++ === 0 ) {
jQuery.ajaxTransport( "script", function(s) {
      if ( stopped ) {
      var dequeue = true,
  // Expose jQuery as module.exports in loaders that implement the Node
      // Return just the object

  rpseudo = new RegExp( pseudos ),
  }
      // other types prohibit arguments
  groups = [];
  }
      remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
      i = name.length;
          ""
      // Break association with cloned elements by also using setAttribute (#9646)
      if ( handle ) {
};
  prevUntil: function( elem, i, until ) {
}
      var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);
    return ret === "" ? "auto" : ret;

      jQuery.event.trigger("ajaxStart");

        return false;
        index = type != null && type + "queueHooks",
  // module pattern (including browserify). Do not create the global, since
      ( num < 0 ? this[ this.length + num ] : this[ num ] );
  // Use native String.trim function wherever possible
  ridentifier = new RegExp( "^" + identifier + "$" ),

      } else if ( match[3] ) {
  preFilters = Expr.preFilter;
  return results;

      while ( i-- ) {
        );
      return name === "value" || value === elem.getAttribute( name ) ?
        handle.apply( cur, data );

    return jQuery.dir( elem, "previousSibling", until );


  };
  /* Prefilters
    }
  // This transport only deals with cross domain requests
      }
        timers = jQuery.timers,
  // the user will be storing it themselves locally, and globals are frowned
  },
  trim: core_trim && !core_trim.call("\uFEFF\xA0") ?

  // Tag
        Sizzle.error( match[0] );

}
      // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
        delete thisCache[ name[i] ];

        value :
      }
// Create mouseenter/leave events using mouseover/out and event-time checks
  },
// Replace/restore the type attribute of script elements for safe DOM manipulation
      if ( this[0].parentNode ) {
}
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)

  if ( s.crossDomain ) {
      var currentTime = fxNow || createFxNow(),
        data = jQuery._data( this );
  // upon in the Node module world.

    function( text ) {
  matchExpr = {
  Expr.find["TAG"] = support.getElementsByTagName ?
      }
  while ( soFar ) {

      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
      }
        if ( cur ) {
        undefined;

jQuery.each({
  siblings: function( elem ) {
function disableScript( elem ) {
        wrap.insertBefore( this[0] );

   * 2) These are called:
    // Uppercase the type

        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

  module.exports = jQuery;
  // Take an array of elements and push it onto the stack
      return text == null ?
    "ID": new RegExp( "^#(" + characterEncoding + ")" ),
    function( tag, context ) {


function select( selector, context, results, seed ) {


          j = 0;
    }
      // Native handler
  mouseenter: "mouseover",
    return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
  elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
      }
function setPositiveNumber( elem, value, subtract ) {
   *    - BEFORE asking for a transport
    s.type = s.type.toUpperCase();
    var script,
        // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
      if ( index ) {
} else {
  // (returning the new matched element set)
        "" :
    "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
      if ( typeof context.getElementsByTagName !== strundefined ) {
      return match;
    // Comma and first run
  var i, tokens, token, type, find,
      // Update function for both resolve and progress values
      // If there is no data left in the cache, we want to continue
          while ( (clazz = classes[j++]) ) {
  };
      handle = ontype && cur[ ontype ];
  mouseleave: "mouseout"
  },
  return elem;

  var matches = rnumsplit.exec( value );
   *    - AFTER param serialization (s.data is a string if s.processData is true)

      head = document.head || jQuery("head")[0] || document.documentElement;
        temp = remaining / animation.duration || 0,
        if ( data[ index ] && data[ index ].stop ) {
  // Otherwise expose jQuery to the global object as usual
  pushStack: function( elems ) {
        core_trim.call( text );
    "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
        return context.getElementsByTagName( tag );
    },
    if ( !matched || (match = rcomma.exec( soFar )) ) {
    match = tokenize( selector );
      updateFunc = function( i, contexts, values ) {
      // and let the cache object itself get destroyed
            // Remove *all* instances
  jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
      if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
}, function( orig, fix ) {
  children: function( elem ) {
}
      wrap.map(function() {
  return matches ?
   * 3) key is the dataType
    // Determine if request has content

        percent = 1 - temp,
          stopQueue( data[ index ] );
  window.jQuery = window.$ = jQuery;

    } :
    "ATTR": new RegExp( "^" + attributes ),
      }

      if ( match ) {

        return function( value ) {
      if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
            while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
    // Some attributes are constructed with empty-string values when not defined
        event.preventDefault();
  jQuery.event.special[ orig ] = {
    return jQuery.sibling( elem.firstChild );
function restoreScript( elem ) {
        var elem = this;
    // Guard against undefined "subtract", e.g., when used as in cssHooks
   * 4) the catchall symbol "*" can be used
    s.hasContent = !rnoContent.test( s.type );
    return {
        index = 0,
        }

    // Build a new jQuery matched element set

    "PSEUDO": new RegExp( "^" + pseudos ),
    } :
    "PSEUDO": function( match ) {
        // Don't consume trailing commas as valid
  if ( !seed ) {
          contexts[ i ] = this;
        return;
              cur = cur.replace( " " + clazz + " ", " " );
    function( elem, name, isXML ) {
      }
    delegateType: fix,
  },
  var match = rscriptTypeMasked.exec( elem.type );

    Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed


        length = animation.tweens.length;
      } else {
  // Register as a named AMD module, since jQuery can be concatenated with other
    var ret = jQuery.merge( this.constructor(), elems );
    // Otherwise use our own trimming functionality
    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
    function( tag, context ) {
      var excess,
        soFar = soFar.slice( match[0].length ) || soFar;
    // Try to minimize operations if there is only one group
          values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
      }
            }
      var ret;
    }
    bindType: fix,
  contents: function( elem ) {
  if ( match ) {
        while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
    value;
   */
    // Save the URL in case we're toying with the If-Modified-Since
      send: function( _, callback ) {

        for ( index in data ) {
  // files that may use define, but not via a proper concatenation script that

    function( text ) {
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      var elem,
        unquoted = !match[5] && match[2];
      }
    if ( match.length === 1 ) {
          if( values === progressValues ) {
    }
          }
      return isXML ?
    event.type = type;

    return jQuery.nodeName( elem, "iframe" ) ?
    elem.type = match[1];
          elem = elem.firstChild;
}
  prefilters = {},
    // and/or If-None-Match header later on

      for ( ; index < length ; index++ ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
  // understands anonymous AMD modules. A named AMD is safest and most robust
    // Add the old object onto the stack (as a reference)
      return text == null ?
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
        tmp = [],

      groups.push( tokens = [] );

            deferred.notifyWith( contexts, values );
  }
          elem.className = value ? jQuery.trim( cur ) : "";
        undefined :

    handle: function( event ) {
      elem.contentDocument || elem.contentWindow.document :
  } else {
        }


    cacheURL = s.url;
        script = document.createElement("script");
        animation.tweens[ index ].run( percent );
            stopQueue( data[ index ] );
  // way to register. Lowercase jquery is used because AMD module names are
    ret.prevObject = this;
        "" :
    "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
        i = 0,
      if ( matchExpr["CHILD"].test( match[0] ) ) {
    }
      // Take a shortcut and set the context if the root selector is an ID
          } else if ( !( --remaining ) ) {

        }
        (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
    // If nobody prevented the default action, do it now
      var ret,
      jQuery.merge( [], elem.childNodes );
    elem.removeAttribute("type");

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
  /* Transports bindings


      }
          }
  // derived from file names, and jQuery is normally delivered in a lowercase
    ret.context = this.context;
        ( text + "" ).replace( rtrim, "" );
    // For use in libraries implementing .is()
        results = context.getElementsByTagName( tag );
        return null;

      tokens = match[0] = match[0].slice( 0 );
            deferred.resolveWith( contexts, values );
  // See jQuery.data for more information
      }
          ret.value :
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {
        target = this,
  }
  }
        return elem;
  var i = extra === ( isBorderBox ? "border" : "content" ) ?
   * 1) key is the dataType
    // More options handling for requests with no content
        script.async = true;

        }
  // file name. Do this after creating the global so that if an AMD module wants

    },
    // We use this for POS matching in `select`

      }
    matched = false;
      if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
          }
  if ( !pvt ) {
    }
          null;

        related = event.relatedTarget,
}, function( name, fn ) {
  return elem;
      }).append( this );
    // If we already have the right measurement, avoid augmentation
   * 2) the catchall symbol "*" can be used
    if ( !s.hasContent ) {

      deferred.notifyWith( elem, [ animation, percent, remaining ]);
      }
  // to call noConflict to hide this version of jQuery, it will work.
    // Return the newly-formed element set

    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
      // Filter out possible comments


          support.getById && context.nodeType === 9 && documentIsHTML &&
        };
    delete cache[ id ].data;

    };
      if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
        handleObj = event.handleObj;
  jQuery.fn[ name ] = function( until, selector ) {
}
    }
    4 :
   * 3) selection will start with transport dataType and THEN go to "*" if needed

        if ( s.scriptCharset ) {


  if ( typeof define === "function" && define.amd ) {
    return ret;
  // results is for internal usage only
      whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
      if ( tag === "*" ) {
      // Accept quoted arguments as-is
    // Combinators
          Expr.relative[ tokens[1].type ] ) {
      },

    return this;
  jQuery.valHooks.button = {
        jQuery.acceptData( elem ) ) {

    var ret = jQuery.map( this, fn, until );


    // Otherwise initialize for horizontal or vertical properties
   */
      // If data is available, append data to url
          script.charset = s.scriptCharset;
      if ( percent < 1 && length ) {
      for ( index = timers.length; index--; ) {
    define( "jquery", [], function () { return jQuery; } );
  },
  makeArray: function( arr, results ) {
  },
        while ( (elem = results[i++]) ) {
      if ( match[3] && match[4] !== undefined ) {
    if ( (match = rcombinators.exec( soFar )) ) {


    // Don't destroy the parent cache unless the internal data object
  },
    get: function( elem, name ) {

      // For mousenter/leave call the handler if related is outside the target.

// Mark scripts as having already been evaluated
    return this;
    name === "width" ? 1 : 0,
  transports = {},
      if ( s.data ) {
        }
        return remaining;
        if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
  }

    var ret = results || [];

          if ( elem.nodeType === 1 ) {
        match[2] = match[4];
      matched = match.shift();
        context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
      progressValues, progressContexts, resolveContexts;
    // had been the only thing left in it

      var ret = elem.getAttributeNode( name );
        // Call a native DOM method on the target with the same name name as the event.
      // NB: No relatedTarget if the mouse left/entered the browser window
    if ( name.slice( -5 ) !== "Until" ) {
function setGlobalEval( elems, refElements ) {
  },


        cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

      } else {
          timers[ index ].anim.stop( gotoEnd );
}
  // Execute a callback for every element in the matched set.

  rnative = /^[^{]+\{\s*\[native \w/,
            tmp.push( elem );

      tokens.push({
        if ( !context ) {

    if ( !isEmptyDataObject( cache[ id ] ) ) {
  toggleClass: function( value, stateVal ) {
      return ret && ret.specified ?
        // Can't use an .isFunction() check here because IE6/7 fails that test.
      if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
      selector = until;
  var elem,

    val = 0;
  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        // #9682: remove data so that it's not used in an eventual retry
        script.src = s.url;
        deferred.resolveWith( elem, [ animation ] );
          dequeue = false;

  // (You can seed the arguments with an array of args, but this is
    if ( arr != null ) {

          }
      // Strip excess characters from unquoted arguments
        value: matched,
          return results;
    // add listeners to Deferred subordinates; treat others as resolved
      return;
    var type = typeof value;
        ret.value :
        // Don't do default actions on window, that's where global variables be (#6170)
        event.type = handleObj.origType;
    }
    i = 0;
  wrapInner: function( html ) {

  allTypes = "*/".concat("*");
        delete s.data;

        return false;
          timers.splice( index, 1 );
})( window );  // only used internally.)
      if ( isArraylike( Object(arr) ) ) {
  // Easily-parseable/retrievable ID or TAG or CLASS selectors
        }
      } else if ( unquoted && rpseudo.test( unquoted ) &&
        // Cast descendant combinators to space
        }
    if ( length > 1 ) {
    }

        undefined;
        if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
        ret = handleObj.handler.apply( this, arguments );

  for ( ; (elem = elems[i]) != null; i++ ) {
    if ( jQuery.isFunction( html ) ) {
  for ( ; i < 4; i += 2 ) {

      }
        // Attach handlers for all browsers
      }
        }
  each: function( callback, args ) {
        jQuery.merge( ret,
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

        // Get excess from tokenize (recursively)
        type: match[0].replace( rtrim, " " )
        selector = selector.slice( tokens.shift().value.length );
      progressValues = new Array( length );
  }
    if ( typeof stateVal === "boolean" && type === "string" ) {
    },

        event.type = fix;
    if ( selector && typeof selector === "string" ) {
    jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
      return this.each(function(i) {
    // both box models exclude margin, so add it if we want it
// #8138, IE may throw an exception when accessing

        script.onload = script.onreadystatechange = function( _, isAbort ) {
    },
      }
    return jQuery.each( this, callback, args );
          typeof arr === "string" ?

        return tmp;
        (excess = tokenize( unquoted, true )) &&
      });
      }
      progressContexts = new Array( length );

      return stateVal ? this.addClass( value ) : this.removeClass( value );
    set: nodeHook.set
          // Don't re-trigger an onFOO event when we call its FOO() method
      }
      ret = jQuery.filter( selector, ret );
  }
        jQuery(this).wrapInner( html.call(this, i) );
    if ( extra === "margin" ) {
// a field from window.location if document.domain has been set
      // Add anti-cache in url if needed

    animation = deferred.promise({

  },
          [ arr ] : arr
  rinputs = /^(?:input|select|textarea|button)$/i,
      }
        // advance to the next closing parenthesis
      soFar = soFar.slice( matched.length );

      resolveContexts = new Array( length );
  // Destroy the cache
    }
  };
          tmp = elem[ ontype ];
      return ret;
    }
}
      });
      val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
try {
      if ( s.cache === false ) {
          if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
      elem: elem,
      // start the next in the queue if the last step wasn't forced

        );
  rheader = /^h\d$/i,
      return results;
        (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
    }
      // Fetch a seed set for right-to-left matching
      for ( ; i < length; i++ ) {
  if ( isNode ) {



    }


    }
    }
  ajaxLocation = location.href;
        s.url = rts.test( cacheURL ) ?

      props: jQuery.extend( {}, properties ),
      // timers currently will call their complete callbacks, which will dequeue
  ready: function( fn ) {
      } else {

    };


      i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
        if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
    jQuery.cleanData( [ elem ], true );
    if ( jQuery.isFunction( value ) ) {
  // Set contenteditable to false on removals(#10429)
          if ( tmp ) {
  };
    if ( this.length > 1 ) {
function cloneCopyEvent( src, dest ) {


} catch( e ) {

            // Handle memory leak in IE
      opts: jQuery.extend( true, { specialEasing: {} }, options ),
      // but only if they were gotoEnd
    // Add the callback
        core_push.call( ret, arr );
  rescape = /'|\\/g,

        // excess is a negative index
    // Filters
      while ( i-- ) {
          resolveValues[ i ].promise()

      return this.each(function( i ) {
  // Setting to empty string throws an error as an invalid value
            elem[ ontype ] = null;
});
      // Remove duplicates

    return this.each(function() {
    if ( isBorderBox ) {
  // Use the href attribute of an A element
          // If there is already a '_' parameter, set its value
            script.onload = script.onreadystatechange = null;
      originalProperties: properties,
      if ( dequeue || !gotoEnd ) {
    jQuery.ready.promise().done( fn );
      }

  // Class
        match[0] = match[0].slice( 0, excess );
    for ( type in Expr.filter ) {
        token = tokens[i];
            .done( updateFunc( i, resolveContexts, resolveValues ) )
  // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
        jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
  jQuery.attrHooks.contenteditable = {
          }

      if ( !guaranteedUnique[ name ] ) {
  if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
      var self = jQuery( this ),
      // border-box includes padding, so remove it if we want content
  // since IE will modify it given document.location
          cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

      originalOptions: options,
        jQuery.dequeue( this, type );

    }
  // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
        match[2] = unquoted.slice( 0, excess );
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||

            .fail( deferred.reject )
  /* jshint eqeqeq: false */
      });
    set: function( elem, value, name ) {

// IE submit delegation
        ret = jQuery.unique( ret );
    return;
        contents = self.contents();
      if ( extra === "content" ) {
  ajaxLocation = document.createElement( "a" );

            // Remove the script
      startTime: fxNow || createFxNow(),
      }
    return this;

  runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
    if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
      }
        (match = preFilters[ type ]( match ))) ) {
        // Abort if we hit a combinator
            .progress( updateFunc( i, progressContexts, progressValues ) );
  } else if ( jQuery.support.deleteExpando || cache != cache.window ) {
    }
      nodeHook.set( elem, value === "" ? false : value, name );
          // Prevent re-triggering of the same event, since we already bubbled it above
if ( !jQuery.support.submitBubbles ) {
      }
  }

        val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
  ajaxLocation.href = "";
          // Otherwise add one to the end
            if ( script.parentNode ) {
      duration: options.duration,
    });
  },
    return ret;
  funescape = function( _, escaped, escapedWhitespace ) {
      return context.getElementsByClassName( className );

        matched = match.shift();
        if ( Expr.relative[ (type = token.type) ] ) {
        } else {
    /* jshint eqeqeq: true */

    }
          jQuery.event.triggered = type;



      if ( contents.length ) {
      }
  ajaxLocation = ajaxLocation.href;
          cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
              script.parentNode.removeChild( script );
      tweens: [],
  },

  },
    var high = "0x" + escaped - 0x10000;
    }
      // Return only captures needed by the pseudo filter method (type and argument)
        tokens.push({
          break;
          --remaining;
    delete cache[ id ];
    return this.each(function() {
  };
          try {
  jQuery.event.special.submit = {
      // Reverse order for parents* and prev-derivatives
  var type, i, l,
        contents.wrapAll( html );

}
      }
            }
      createTween: function( prop, end ) {
  finish: function( type ) {
  slice: function() {

    // NaN means non-codepoint
  };
      return match.slice( 0, 3 );
          value: matched,
        }
        }

      if ( type === "string" ) {

            elem[ type ]();
    setup: function() {
      if ( rparentsprev.test( name ) ) {
    oldData = jQuery._data( src ),

      // at this point, extra isn't border nor margin, so remove border

    }

        var tween = jQuery.Tween( elem, animation.opts, prop, end,
    if ( type !== false ) {
    return this.pushStack( core_slice.apply( this, arguments ) );
  inArray: function( elem, arr, i ) {
    // Support: Firefox

    }
          type: type,
        if ( (find = Expr.find[ type ]) ) {
      }
  // When all else fails, null
        // toggle individual class names
  // Set width and height to auto instead of 0 on empty string( Bug #8150 )
          } catch ( e ) {
      // Only need this for delegated form submit events
        ret = ret.reverse();
    curData = jQuery._data( dest, oldData ),
      } else {
      if ( extra !== "margin" ) {
// Segment location into parts

            // Dereference the script
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
      type = type || "fx";
  },
    var len;
    // Workaround erroneous numeric interpretation of +"0x"
  /* QSA/matchesSelector
  },
          matches: match
          // Search, expanding context for leading sibling combinators
    }
  } else {
        var className,
  // This is for removals
            // IE<9 dies on focus/blur to hidden element (#1486,#12518)
      if ( jQuery.nodeName( this, "form" ) ) {
      }
    events = oldData.events;
        self.append( html );
        val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            script = null;
        animation.tweens.push( tween );
    }


    return high !== high || escapedWhitespace ?
  ---------------------------------------------------------------------- */

        });
          if ( (seed = find(

    cache[ id ] = null;
          i = 0,
  jQuery.each([ "width", "height" ], function( i, name ) {
            // only reproducible on winXP IE8 native, not IE9 in IE8 mode
        return false;
    }

      }
      }

    if ( s.ifModified ) {

        return tween;
    return this.each(function() {
  first: function() {
    if ( arr ) {
      escaped :

  filter: {
        soFar = soFar.slice( matched.length );
            token.matches[0].replace( runescape, funescape ),
    // if we're not waiting on anything, resolve the master
  }
          self = jQuery( this ),
    jQuery.attrHooks[ name ] = {
          }
      }

  if ( events ) {
    });
    } else {
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
      if ( jQuery.lastModified[ cacheURL ] ) {
            // Callback if not abort
      },
      var index,
    return this.eq( 0 );
      if ( core_indexOf ) {
      // BMP codepoint
  // QSA and matchesSelector support

      }
            rsibling.test( tokens[0].type ) && context.parentNode || context
    if ( !remaining ) {
}
          classNames = value.match( core_rnotwhite ) || [];
      set: function( elem, value ) {
          jQuery.event.triggered = undefined;

    return this.pushStack( ret );
    delete curData.handle;
  },
      // at this point, extra isn't content, so add padding
function addToPrefiltersOrTransports( structure ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
            if ( !isAbort ) {
      stop: function( gotoEnd ) {
        data = jQuery._data( this ),
  },
        return core_indexOf.call( arr, elem, i );
      high < 0 ?

    "TAG": function( nodeNameSelector ) {
    }
          )) ) {
      deferred.resolveWith( resolveContexts, resolveValues );


        if ( value === "" ) {

      // Lazy-add a submit handler when a descendant form may potentially be submitted
  };
    curData.events = {};

      val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

      }
              callback( 200, "success" );
        var index = 0,
        queue = data[ type + "queue" ],

      }
        String.fromCharCode( high + 0x10000 ) :
  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
      var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();


    }
jQuery.extend({
        while ( (className = classNames[ i++ ]) ) {
          elem.setAttribute( name, "auto" );
          if ( tmp ) {
      jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
});

  wrap: function( html ) {

  // dataTypeExpression is optional and defaults to "*"
      if ( jQuery.etag[ cacheURL ] ) {
            }
          // if we are going to the end, we want to run all the tweens
        hooks = data[ type + "queueHooks" ],
  last: function() {

        // Supplemental Plane codepoint (surrogate pair)
  rbuggyMatches = [];
      return nodeNameSelector === "*" ?
    if ( !matched ) {
            // If seed is empty or no tokens remain, we can return early

  cache: {},
          // check each className given, space separated list
          return value;
            elem[ ontype ] = tmp;
        // Node name check avoids a VML-related crash in IE (#9807)

    for ( type in events ) {
    var isFunction = jQuery.isFunction( html );
      // at this point, extra isn't content nor padding, so add border
  return function( dataTypeExpression, func ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
          }
          // otherwise we skip this part
        timers = jQuery.timers,
    return this.eq( -1 );
      len = arr.length;
        String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );

        function() { return true; } :
      break;
            tokens.splice( i, 1 );
    return deferred.promise();

          if ( self.hasClass( className ) ) {
        }
          }
        var elem = e.target,
jQuery.extend({
      for ( i = 0, l = events[ type ].length; i < l; i++ ) {

      if ( extra !== "padding" ) {

      }
        };
          length = gotoEnd ? animation.tweens.length : 0;
        length = queue ? queue.length : 0;
  },
      i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
  };
  // qSa(:focus) reports false when true (Chrome 21)
        function( elem ) {
    }
            selector = seed.length && toSelector( tokens );
  }
  // The following elements throw uncatchable exceptions if you
            self.removeClass( className );
      }
        }
          form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
  filter: function( expr, elems, not ) {
        jQuery.event.add( dest, type, events[ type ][ i ] );
    return this.each(function(i) {
        val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
    if ( typeof dataTypeExpression !== "string" ) {
    }

        if ( stopped ) {




  // We allow this because of a bug in IE8/9 that throws an error
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
  }
            if ( !selector ) {
});
  // attempt to add expando properties to them.
          } else {
    };
      }
        if ( form && !jQuery._data( form, "submitBubbles" ) ) {
    var elem = elems[ 0 ];
      }
      jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
      }
      func = dataTypeExpression;

        // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
          return this;
      // enable finishing flag on private data
  eq: function( i ) {
      for ( ; i < len; i++ ) {
// Optimize for push.apply( _, NodeList )
  // whenever `document.activeElement` is accessed on an iframe
        };

              push.apply( results, seed );
jQuery.support = (function( support ) {
  noData: {
            self.addClass( className );
  });
    }
          jQuery.event.add( form, "submit._submit", function( event ) {

    }
    });
    }
      dataTypeExpression = "*";
    // Set the correct header, if data is being sent
        // Use native DOM manipulation to avoid our domManip AJAX trickery
        }
      data.finish = true;
    var len = this.length,
        // Skip accessing in sparse arrays
try {
  // So, we allow :focus to pass through QSA all the time to avoid the IE error
    },
  // Return the length of the invalid excess
              return results;

    "applet": true,
          }
}

            event._submit_bubble = true;
    if ( not ) {
  }
  },
  }
    }
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
        head.insertBefore( script, head.firstChild );
        stopped = true;

      j = +i + ( i < 0 ? len : 0 );
        if ( i in arr && arr[ i ] === elem ) {
  push.apply(
  // See http://bugs.jquery.com/ticket/13378

  // if we're just parsing
            }
  var all, a, input, select, fragment, opt, eventName, isSupported, i,
    "embed": true,
        }

    return event.result;
          });
      expr = ":not(" + expr + ")";




      jqXHR.setRequestHeader( "Content-Type", s.contentType );
      },
        for ( ; index < length ; index++ ) {
      // empty the queue first
    return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
          return i;
    (arr = slice.call( preferredDoc.childNodes )),
  rbuggyQSA = [];
    "CLASS": function( className ) {
  // Otherwise, throw an error or return tokens

    div = document.createElement("div");
    // Ban all objects except for Flash (which handle expandos)


  },
          jQuery._data( form, "submitBubbles", true );
    }
  // make the cloned public data object a copy from the original
  unwrap: function() {
  return val;
    var dataType,
    }

          animation.tweens[ index ].run( 1 );
      jQuery.queue( this, type, [] );
  },
        }
    preferredDoc.childNodes

      var pattern = classCache[ className + " " ];
  return parseOnly ?
            break;

    "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      // Toggle whole class name
// Some attributes require a special call on IE

        }

  if ( curData.data ) {
    return this.parent().each(function() {
}
      i = 0,

      abort: function() {
        }


      }
  );
  if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {

    soFar.length :
          }
  // Setup
  },
      } else if ( type === core_strundefined || type === "boolean" ) {
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  dispatch: function( event ) {
      });
    return elems.length === 1 && elem.nodeType === 1 ?
    curData.data = jQuery.extend( {}, curData.data );
      if ( !jQuery.nodeName( this, "body" ) ) {

      dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];
    // Set the Accepts header for the server, depending on the dataType
        if ( script ) {

      if ( hooks && hooks.stop ) {
  map: function( callback ) {
    }
  // Support: Android<4.0
    // Build QSA regex
      return pattern ||
    soFar ?
        }
  div.setAttribute( "className", "t" );

        if ( this.className ) {
if ( !jQuery.support.hrefNormalized ) {

      // return undefined since we don't need an event listener
      jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
  }
        jQuery( this ).replaceWith( this.childNodes );
function getWidthOrHeight( elem, name, extra ) {

    jqXHR.setRequestHeader(
          script.onload( undefined, true );
        // resolve when we played the last frame
        hooks.stop.call( this, true );
    return this.pushStack( jQuery.map(this, function( elem, i ) {

  // Detect silently failing push.apply
    // Regex strategy adopted from Diego Perini
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
      Sizzle.error( selector ) :
      }
  div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
  hasData: function( elem ) {
          // store className if set
  // href/src property should get the full normalized URL (#10299/#12915)
    // Make a writable jQuery.Event from the native event object
    },
      jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
}
      }

    if ( jQuery.isFunction( func ) ) {
      "Accept",
        }
        // otherwise, reject
      }
      return callback.call( elem, i, elem );
    return -1;
  arr[ preferredDoc.childNodes.length ].nodeType;
    assert(function( div ) {
        classCache( className, function( elem ) {
      // Cache the tokens
    }

    elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
          jQuery._data( this, "__className__", this.className );
  jQuery.each([ "href", "src" ], function( i, name ) {
    event = jQuery.event.fix( event );

        return elem.nodeType === 1;

    }).end();
  // Start with offset property, which is equivalent to the border-box value
      // For each dataType in the dataTypeExpression
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
      }
        if ( gotoEnd ) {

    }));
  },
} catch ( e ) {
      // Select is set to empty string on purpose
          return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
      tokenCache( selector, groups ).slice( 0 );
  }
  // Finish early in limited (non-browser) environments
    return !!elem && !isEmptyDataObject( elem );
        }
    jQuery.propHooks[ name ] = {

    postDispatch: function( event ) {
      }));
function fixCloneNodeIssues( src, dest ) {
  }
  var valueIsBorderBox = true,
      while ( (dataType = dataTypes[i++]) ) {
        s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
    };
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
      // look for any active animations, and finish them
  },

  push = { apply: arr.length ?
      // This is to test IE's treatment of not explicitly
        });
}

  all = div.getElementsByTagName("*") || [];
  },

      get: function( elem ) {
    var i, ret, handleObj, matched, j,
      // If form was submitted by the user, bubble the event up the tree
  },
  var nodeName, e, data;
});
    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        // Prepend if requested
        s.accepts[ "*" ]
  }
        } else {
      for ( index = timers.length; index--; ) {

  merge: function( first, second ) {

      // setting a boolean content attribute,
    },

  // Compile and execute a filtering function
  a = div.getElementsByTagName("a")[ 0 ];

        // If the element has a class name or if we're passed "false",
        return elem.getAttribute( name, 4 );
      handlerQueue = [],
      if ( event._submit_bubble ) {


var iframe, getStyles, curCSS,
    styles = getStyles( elem ),
        if ( dataType[0] === "+" ) {
    );
});
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
  end: function() {
    var l = second.length,
    // Leverage slice if possible
      // since its presence should be enough

function toSelector( tokens ) {
  // Provide `match` to avoid retokenization if we modified the selector above
  if ( !a || !a.style || !all.length ) {
  data: function( elem, name, data ) {
        // then remove the whole classname (if there was one, the above saved it).
      }
      args = core_slice.call( arguments ),
        delete event._submit_bubble;
  dir: function( elem, dir, until ) {
  // We do not need to do anything for non-Elements
  ralpha = /alpha\([^)]*\)/i,
    isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
          dataType = dataType.slice( 1 ) || "*";

var oldCallbacks = [],
        }
          timers[ index ].anim.stop( true );
    return this.prevObject || this.constructor(null);
      i = first.length,
    function( target, els ) {
      // http://bugs.jquery.com/ticket/12359
    "ATTR": function( name, operator, check ) {
  var i = 0,
  compile( selector, match )(
    return support;
    return internalData( elem, name, data );
        // Otherwise bring back whatever was previously saved (if anything),
    };
      handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
        if ( this.parentNode && !event.isTrigger ) {
    var matched = [],
  if ( dest.nodeType !== 1 ) {
  ropacity = /opacity\s*=\s*([^)]*)/,

          (structure[ dataType ] = structure[ dataType ] || []).unshift( func );
    // Check for headers option
  rjsonp = /(=)\?(?=&|$)|\?\?/;
        return this;
          timers.splice( index, 1 );
  },
      j = 0;
      push_native.apply( target, slice.call(els) );
      div.innerHTML = "<select><option selected=''></option></select>";
      return function( elem ) {
    len = tokens.length,
    seed,
  }
  },
        // falling back to the empty string if nothing was stored.
  });
      special = jQuery.event.special[ event.type ] || {};
          jQuery.event.simulate( "submit", this.parentNode, event, true );
      cur = elem[ dir ];
    return;
  rposition = /^(top|right|bottom|left)$/,
  // some non-html elements return undefined for offsetWidth, so check for null/undefined

    for ( i in s.headers ) {

      }
        }


    } :

        var result = Sizzle.attr( elem, name );
    selector = "";
    context,


        this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
}

        }

  }
  // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // Otherwise append
      jqXHR.setRequestHeader( i, s.headers[ i ] );
// Default jsonp settings
    }),
      }
  // For internal use only.
    if ( typeof l === "number" ) {

      // Support: IE8

  for ( ; i < len; i++ ) {
    !documentIsHTML,
  // First batch of tests
  removeData: function( elem, name ) {
      }

    // Use the fix-ed jQuery.Event rather than the (read-only) native event
      }
    while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {

  // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        } else {
    }
jQuery.ajaxSetup({
    props = animation.props;

  // Behaves like an Array's method, not like a jQuery method.
      for ( ; j < l; j++ ) {
    // Support: IE<9
      // Boolean attributes and "value" are not treated correctly
        if ( result == null ) {
    selector += tokens[i].value;
    results,
  select = document.createElement("select");
    return internalRemoveData( elem, name );
    });
if ( !jQuery.support.style ) {
    args[0] = event;
    },
      if ( cur.nodeType === 1 ) {
  nodeName = dest.nodeName.toLowerCase();
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  if ( val <= 0 || val == null ) {
          (structure[ dataType ] = structure[ dataType ] || []).push( func );

  jsonp: "callback",

      // look for any animations in the old queue and finish them
  push: core_push,
        first[ i++ ] = second[ j ];
    // Otherwise append directly
      if ( !div.querySelectorAll("[selected]").length ) {
          return operator === "!=";
  }
    rsibling.test( selector )
  opt = select.appendChild( document.createElement("option") );
  },
  },
  jQuery.attrHooks.style = {
    event.delegateTarget = this;

        matched.push( cur );

  rmargin = /^margin/,
    // Fall back to computed then uncomputed css if necessary
        }
    // Allow custom headers/mimetypes and early abort
  jsonpCallback: function() {
  propFilter( props, animation.opts.specialEasing );
      for ( index = 0; index < length; index++ ) {
  sort: [].sort,
      }
    function( target, els ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
        }
  return selector;
  );
  input = div.getElementsByTagName("input")[ 0 ];


    get: function( elem ) {

    teardown: function() {
      }
  // IE6-8 copies events bound via attachEvent when using cloneNode.
  rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
    val = curCSS( elem, name, styles );
      }
    if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );

        if ( queue[ index ] && queue[ index ].finish ) {
  splice: [].splice
    } else {
      var j = target.length,
      }
        if ( !operator ) {
}
  return results;

  // For internal use only.
  hasClass: function( selector ) {
      // Return undefined in the case of empty string
    // Call the preDispatch hook for the mapped type, and let it bail if desired
      // Only need this for delegated form submit events
      cur = cur[dir];
  if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
  rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
    if ( val < 0 || val == null ) {
    }
      // Abort if not done already and return
    this[ callback ] = true;
  for ( ; index < length ; index++ ) {
          queue[ index ].finish.call( this );
};
      while ( second[j] !== undefined ) {
        i = 0;

          return true;

}
  a.style.cssText = "top:1px;float:left;opacity:.5";
  _data: function( elem, name, data ) {
    var className = " " + selector + " ",
      // Note: IE uppercases css property names, but if we were to .toLowerCase()
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      if ( jQuery.nodeName( this, "form" ) ) {
    }
    data = jQuery._data( dest );
  rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
      val = elem.style[ name ];
  };
      return jqXHR.abort();
    return callback;
    result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
        }

        first[ i++ ] = second[ j++ ];
      // Can't trust NodeList.length
      // Webkit/Opera - :checked should return selected option elements
        }
function addCombinator( matcher, combinator, base ) {


    return internalData( elem, name, data, true );
      i = 0,
      // .cssText, that would destroy case senstitivity in URL's, like in "background"
      return;
        return false;
    return matched;

  elemdisplay = { BODY: "block" },
    }
}
    }
  }
    if ( result ) {
      }
// Give the init function the jQuery prototype for later instantiation
      }
      while ( (target[j++] = els[i++]) ) {}
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked

  var dir = combinator.dir,
// One-time assignments
  // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
  },
      l = this.length;
      return elem.style.cssText || undefined;
    }
      }
  },
    for ( e in data.events ) {




});
      return result;

jQuery.fn.init.prototype = jQuery.fn;
    }
      target.length = j - 1;
      // IE8 throws error here and will not see later tests
        result += "";
    checkNonElements = base && dir === "parentNode",

  support.getSetAttribute = div.className !== "t";

    for ( ; i < l; i++ ) {
    },



      jQuery.removeEvent( dest, e, data.handle );
  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
    // Computed unit is not pixels. Stop here and return.
// Base inspection function for prefilters and transports
    // aborting is no longer a cancellation

    }
      // turn off finishing flag


    }
      if ( !div.querySelectorAll(":checked").length ) {

    doneName = done++;
// Sort stability

  _removeData: function( elem, name ) {
      if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
    set: function( elem, value ) {
    // Determine handlers
      // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
  sibling: function( n, elem ) {
    }
  cssNormalTransform = {
    if ( rnumnonpx.test(val) ) {
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
    strAbort = "abort";
// Detect, normalize options and install callbacks for jsonp requests
  }
      delete data.finish;
jQuery.extend = jQuery.fn.extend = function() {
    first.length = i;
  };
        rbuggyQSA.push(":checked");
        return operator === "=" ? result === check :

support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
  // IE strips leading whitespace when .innerHTML is used
    return internalRemoveData( elem, name, true );
        return true;
      return ( elem.style.cssText = value + "" );
    handlerQueue = jQuery.event.handlers.call( this, event, handlers );
      jQuery.event.remove( this, "._submit" );
    var r = [];

    letterSpacing: 0,
      return val;


jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

    });
  var src, copyIsArray, copy, name, options, clone,

}
      }
          operator === "!=" ? result !== check :
  return combinator.first ?

  support.leadingWhitespace = div.firstChild.nodeType === 3;
  },
      }
    }

    }

    // Event data gets referenced instead of copied if the expando gets copied too
    fontWeight: 400
    }
  var inspected = {},
    // Install callbacks on deferreds

  jQuery.map( props, createTween, animation );
  }
    target = arguments[0] || {},
    return first;

    });
          operator === "^=" ? check && result.indexOf( check ) === 0 :
    // Check against closest ancestor/preceding element
// Support: Chrome<14


    }
  };
    // Run delegates first; they may want to stop propagation beneath us
  };
    for ( ; n; n = n.nextSibling ) {
    dest.removeAttribute( jQuery.expando );
  },

    seekingTransport = ( structure === transports );
    for ( i in { success: 1, error: 1, complete: 1 } ) {
  var callbackName, overwritten, responseContainer,

});
    i = 1,
  },
function Sizzle( selector, context, results, seed ) {

          operator === "*=" ? check && result.indexOf( check ) > -1 :
    function( elem, context, xml ) {
// Always assume duplicates if they aren't passed to the comparison function
  // Make sure that tbody elements aren't automatically inserted
  // A method for determining if a DOM node can handle the data expando

}
    i = 0;
}
      if ( n.nodeType === 1 && n !== elem ) {
  }

    // we need the check for style in case a browser which returns unreliable values

      jqXHR[ i ]( s[ i ] );
    jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
  if ( jQuery.isFunction( animation.opts.start ) ) {

    length = arguments.length,

  var match, elem, m, nodeType,
    assert(function( div ) {
          operator === "$=" ? check && result.slice( -check.length ) === check :
      while ( (elem = elem[ dir ]) ) {
support.detectDuplicates = hasDuplicate;
  // IE will insert them into empty tables
  acceptData: function( elem ) {
    return false;

    while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {

        r.push( n );

  cssExpand = [ "Top", "Right", "Bottom", "Left" ],
    // for getComputedStyle silently falls back to the reliable elem.style
  function inspect( dataType ) {
    }
      "url" :
    animation.opts.start.call( elem, animation );
// Generate parameters to create a standard animation
    deep = false;
  grep: function( elems, callback, inv ) {
    // QSA vars

          operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
        if ( elem.nodeType === 1 || checkNonElements ) {

  support.tbody = !div.getElementsByTagName("tbody").length;
    // Do not set data on non-element because it will not be cleared (#8335).
  },
// Safari mis-reports the default selected property of an option
      event.currentTarget = matched.elem;
// IE change delegation and checkbox/radio fix
      }
  // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
  cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );
    var selected;

      typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
  }
function genFx( type, includeWidth ) {

    var retVal,
    i, groups, old, nid, newContext, newSelector;
      // Support: Opera 10-12/IE8
          operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
          return matcher( elem, context, xml );
// Initialize against the default document

    if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {

// Accessing the parent's selectedIndex property fixes it

if ( !jQuery.support.changeBubbles ) {
    }
  if ( nodeName === "script" && dest.text !== src.text ) {


    inspected[ dataType ] = true;
    // Get transport
    );

  var which,
  // Handle a deep copy situation
      ret = [],

      // ^= $= *= and empty values
          false;
        }
setDocument();
  // Make sure that link elements get serialized correctly by innerHTML
      return false;
  val: function( value ) {
if ( !jQuery.support.optSelected ) {
      j = 0;


    disableScript( dest ).text = src.text;
// return a css property mapped to a potentially vendor prefixed property
    // Normalize "", auto, and prepare for extra
    jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

  jQuery.fx.timer(
    attrs = { height: type },
  if ( typeof target === "boolean" ) {
      i = 0,
  if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
      // Should not select anything
      };
      }

  // This requires a wrapper element in IE
    }
    var ret, hooks, isFunction,
  jQuery.propHooks.selected = {
      while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
  jQuery.event.special.change = {
    return r;
    restoreScript( dest );
function vendorPropName( style, name ) {
    val = parseFloat( val ) || 0;
      var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );

  // Handle iff the expected data type is "jsonp" or we have a parameter to set
    jQuery.extend( tick, {
    i = 0;
    deep = target;
      length = elems.length;
    setDocument( context );
      // Support: Windows 8 Native Apps
    },
    } :
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
  support.htmlSerialize = !!div.getElementsByTagName("link").length;

      elem = this[0];
    get: function( elem ) {


  }


  }
      if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
    // If no transport, we auto-abort
  if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
      elem: elem,

    target = arguments[1] || {};
    inv = !!inv;
  }
      // The type attribute is restricted during .innerHTML assignment


// Detached nodes confoundingly follow *each other*

    var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

      var parent = elem.parentNode;
        // Triggered event must either 1) have no namespace, or
    setup: function() {
});
  // IE6-10 improperly clones children of object elements using classid.
  // shortcut for names that are not vendor prefixed

        options.dataTypes.unshift( dataTypeOrTransport );
    if ( !transport ) {

      anim: animation,
  // if we include width, step value is 1 to do all cssExpand values,
    // skip the boolean and the target


      var input = doc.createElement("input");
    "CHILD": function( type, what, argument, first, last ) {
    // Check against all ancestor/preceding elements
support.sortDetached = assert(function( div1 ) {
  // Get the style information from getAttribute

    if ( !arguments.length ) {

        // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).


  // IE10 throws NoModificationAllowedError if parent is null, #12132.
  if ( name in style ) {
  // use the active box-sizing model to add/subtract irrelevant styles
        inspect( dataTypeOrTransport );
      done( -1, "No Transport" );
    // Get callback name, remembering preexisting value associated with it
      queue: animation.opts.queue
  // if we don't include width, step value is 2 to skip over Left and Right
    i = 2;
    // Go through the array, only saving the items
  context = context || document;
      input.setAttribute( "type", "hidden" );
      var simple = type.slice( 0, 3 ) !== "nth",
    function( elem, context, xml ) {
  // Should return 1, but returns 4 (following)
  // (IE uses .cssText instead)
    // nodes accept data unless otherwise specified; rejection can be conditional
      if ( elem ) {
      if ( parent ) {
        if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
      if ( rformElems.test( this.nodeName ) ) {
// Implement the identical functionality for filter and not
  } else if ( nodeName === "object" ) {
    return name;
  return ( val +
        return false;
    } else {
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
    })
  includeWidth = includeWidth? 1 : 0;
  }
    // that pass the validator function
  results = results || [];
      div.appendChild( input ).setAttribute( "t", "" );
        forward = type.slice( -4 ) !== "last",
      var data, cache, outerCache,
  return div1.compareDocumentPosition( document.createElement("div") ) & 1;
  support.style = /top/.test( a.getAttribute("style") );
    return !noData || noData !== true && elem.getAttribute("classid") === noData;
        hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
        parent.selectedIndex;

        // IE doesn't fire change on a check/radio until blur; trigger it on click
function winnow( elements, qualifier, not ) {
    if ( dest.parentNode ) {
  }
    augmentWidthOrHeight(
      } else if ( seekingTransport ) {
      jqXHR.readyState = 1;
      s.jsonpCallback() :
  );
  for( ; i < 4 ; i += 2 - includeWidth ) {

    for ( ; i < length; i++ ) {


        ofType = what === "of-type";
        dirkey = dirruns + " " + doneName;
});

  }


          event.handleObj = handleObj;
        // after a propertychange. Eat the blur-change in special.change.handle.
  if ( jQuery.isFunction( qualifier ) ) {
      dest.outerHTML = src.outerHTML;

      elem,
        return !( selected = dataTypeOrTransport );

      s.jsonpCallback;

    which = cssExpand[ i ];
  // Handle case when target is a string or something (possible in deep copy)
      retVal = !!callback( elems[ i ], i );
  if ( !selector || typeof selector !== "string" ) {
      if ( div.querySelectorAll("[t^='']").length ) {



  // Make sure that URLs aren't manipulated
});
        if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
        // Make sure that it also works with optgroups, see #5701
          event.data = handleObj.data;
        // This still fires onchange a second time for check/radio after blur.
    return jQuery.grep( elements, function( elem, i ) {
    }
  // check for vendor prefixed names
      name,
      }
      // Send global event

  // attach callbacks from options
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
      if ( inv !== retVal ) {
    return results;
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
      return first === 1 && last === 0 ?
      // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
// Support: IE<8
  // (IE normalizes it by default)

          return ret;
        if ( parent.parentNode ) {

        if ( this.type === "checkbox" || this.type === "radio" ) {
      /* jshint -W018 */

  var capName = name.charAt(0).toUpperCase() + name.slice(1),
      extra || ( isBorderBox ? "border" : "content" ),
    });
      if ( fireGlobals ) {
    // Insert callback into url or form data
  return animation.progress( animation.opts.progress )
  }
    target = {};
        ret.push( elems[ i ] );
  }
      }

      if ( xml ) {
// Prevent attribute/property "interpolation"
  support.hrefNormalized = a.getAttribute("href") === "/a";
jQuery.fn.extend({
        }
          parent.parentNode.selectedIndex;
          ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
          jQuery.event.add( this, "propertychange._change", function( event ) {
      return !!qualifier.call( elem, i, elem ) !== not;
    // This path appears unavoidable for IE9. When cloning an object
    origName = name,
      valueIsBorderBox,
    return selected;
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
    if ( jsonProp ) {
    .done( animation.opts.done, animation.opts.complete )

  }
      }


        // Shortcut for :nth-*(n)
        while ( (elem = elem[ dir ]) ) {
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

  data: function( key, value ) {

        }
              .apply( matched.elem, args );
            if ( event.originalEvent.propertyName === "checked" ) {
    });
    // element in IE9, the outerHTML strategy above is not sufficient.
    i = cssPrefixes.length;
      styles
  }
      }
      s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
    .fail( animation.opts.fail )
  if ( includeWidth ) {

    }
  if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
        function( elem ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
if ( !assert(function( div ) {
  // Make sure that element opacity exists
    var attrs, name,
        ret = elem.value;
      }

              this._just_changed = true;

    // If the src has innerHTML and the destination does not,

    )

      // Timeout
    } else if ( s.jsonp !== false ) {
    .always( animation.opts.always );
    attrs.opacity = attrs.width = type;
  // extend jQuery itself if only one argument is passed

    return [];
      // IE8 throws error here and will not see later tests
          return !!elem.parentNode;
            if ( matcher( elem, context, xml ) ) {
  div.innerHTML = "<a href='#'></a>";
  // (IE uses filter instead)
      data = null,

      return null;
          if ( ret !== undefined ) {
            }
  }
    // copy the src.innerHTML into the dest.innerHTML. #10324
  while ( i-- ) {
  ) + "px";
  return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
      if ( s.async && s.timeout > 0 ) {
      s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
}
  }
  if ( length === i ) {
    return ret;
  }
      if ( !div.querySelectorAll(":enabled").length ) {
        } :
              return true;
  return div.firstChild.getAttribute("href") === "#" ;
  // Use a regex to work around a WebKit issue. See #5145
      i = 0,
        return typeof ret === "string" ?
    }
            if ( (event.result = ret) === false ) {
          });

    if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
    name = cssPrefixes[ i ] + capName;
}
}
        timeoutTimer = setTimeout(function() {
    }


    target = this;
  },

        rbuggyQSA.push( ":enabled", ":disabled" );

            }
}) ) {
  support.opacity = /^0.5/.test( a.style.opacity );
      elem = this[0];
          // handle most common string cases
  };
              event.preventDefault();
          jQuery.event.add( this, "click._change", function( event ) {
  if ( qualifier.nodeType ) {
      dest.innerHTML = src.innerHTML;
    if ( name in style ) {


          jqXHR.abort("timeout");

function propFilter( props, specialEasing ) {
  return attrs;
    --i;

  if ( documentIsHTML && !seed ) {
      }
        function( elem, context, xml ) {
          }
  addHandle( "type|href|height|width", function( elem, name, isXML ) {


          ret.replace(rreturn, "") :
}
              event.stopPropagation();
            if ( this._just_changed && !event.isTrigger ) {
    return jQuery.grep( elements, function( elem ) {
    }
      return name;
// Try to determine the default display value of an element
// A special extend for ajax options
        }, s.timeout );
    // Use data converter to retrieve json after script execution
  var index, name, easing, value, hooks;
}
  }
  // arg is for internal usage only


          var cache, outerCache, node, diff, nodeIndex, start,
        }
    if ( !isXML ) {
  // Verify style float existence
    // Special expections of .data basically thwart jQuery.access,
          // handle cases where value is null/undef or number

            }
              this._just_changed = false;
      return ( elem === qualifier ) !== not;

    }
function css_defaultDisplay( nodeName ) {
// that takes "flat" options (not to be deep extended)
      }
    s.converters["script json"] = function() {



  map: function( elems, callback, arg ) {
    // Shortcuts
      // Opera 10-11 does not throw on post-comma invalid pseudos
            dir = simple !== forward ? "nextSibling" : "previousSibling",
      } else {
      return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
  // (IE uses styleFloat instead of cssFloat)
    // so implement the relevant behavior ourselves
          ret == null ? "" : ret;
jQuery.each([
          }
            }
    });
  } else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
  }
  var doc = document,
// Fixes #9887

      if ( !responseContainer ) {
  // camelCase, specialEasing and expand cssHook pass
// Generate shortcuts for custom animations
  for ( ; i < length; i++ ) {
    var value,
    if ( (match = rquickExpr.exec( selector )) ) {
      div.querySelectorAll("*,:x");
            parent = elem.parentNode,
        while ( (elem = elem[ dir ]) ) {
    }
  support.cssFloat = !!a.style.cssFloat;

      }
  "tabIndex",
        }
            // Allow triggered, simulated change events (#11500)

    // IE6-8 fails to persist the checked state of a cloned checkbox

    display = elemdisplay[ nodeName ];
function ajaxExtend( target, src ) {
      try {
        jQuery.error( callbackName + " was not called" );
  for ( index in props ) {
jQuery.each({
    // Only deal with non-null/undefined values
      i = 0,
      // Speed-up: Sizzle("#ID")
      rbuggyQSA.push(",.*:");
            name = ofType && elem.nodeName.toLowerCase(),
          if ( elem.nodeType === 1 || checkNonElements ) {
  });

    // Gets all values

  "readOnly",
      }
            jQuery.event.simulate( "change", this, event, true );
  }
    // or radio button. Worse, IE6-7 fail to give the cloned element
  return origName;

  var deep, key,
        state = 1;
      }
    name = jQuery.camelCase( index );
  slideDown: genFx("show"),
    if ( (options = arguments[ i ]) != null ) {
      length = elems.length,
      if ( (m = match[1]) ) {
    });
            useCache = !xml && !ofType;
            outerCache = elem[ expando ] || (elem[ expando ] = {});
}
  // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
    if ( key === undefined ) {
      return;
  "maxLength",
    }
          });

    // a checked appearance if the defaultChecked value isn't also set
}
  if ( !display ) {
    flatOptions = jQuery.ajaxSettings.flatOptions || {};
        transport.send( requestHeaders, done );
      return responseContainer[ 0 ];
    easing = specialEasing[ name ];
  slideUp: genFx("hide"),
      // Extend the base object
      isArray = isArraylike( elems ),
        if ( nodeType === 9 ) {
  }

            if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {

  support.checkOn = !!input.value;
      if ( this.length ) {
    }
  "cellSpacing",

        }
  if ( typeof qualifier === "string" ) {


    display = actualDisplay( nodeName, doc );

      } catch ( e ) {
    };
    value = props[ index ];
  slideToggle: genFx("toggle"),
      for ( name in options ) {
      ret = [];
          elem = context.getElementById( m );

          if ( parent ) {
              if ( (data = cache[1]) === true || data === cachedruns ) {
// Support: IE<9

        data = jQuery.data( elem );

  "cellPadding",
    // Call the postDispatch hook for the mapped type
        return false;
    if ( isSimple.test( qualifier ) ) {
    dest.defaultChecked = dest.checked = src.checked;
function isHidden( elem, el ) {

  for ( key in src ) {
        // Propagate exception as error if not done

    if ( jQuery.isArray( value ) ) {
  fadeIn: { opacity: "show" },
        src = target[ name ];

          // Check parentNode to catch when Blackberry 4.6 returns
  if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||

                return data === true;
// Use defaultValue in place of getAttribute("value")
  // Make sure that a selected-by-default option has a working selected property.

    isFunction = jQuery.isFunction( value );
  "rowSpan",
    if ( special.postDispatch ) {
      }
      return jQuery.filter( qualifier, elements, not );

  // isHidden might be called from jQuery#filter function;
    // If the simple way fails, read from inside an iframe
    if ( src[ key ] !== undefined ) {
        if ( state < 2 ) {
    // force json dataType
      easing = value[ 1 ];
  fadeOut: { opacity: "hide" },
        copy = options[ name ];
    // Go through the array, translating each of the items to their
          // nodes that are no longer in the document #6963
    docElem.mozMatchesSelector ||
            // :(first|last|only)-(child|of-type)
              }
if ( !support.attributes || !assert(function( div ) {
  // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
        if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {

  "colSpan",
      special.postDispatch.call( this, event );
      // Delegated event; lazy-add a change handler on descendant inputs
    }
    // IE6-7 get confused and end up setting the value of a cloned
  // in that case, element will be second argument
    if ( display === "none" || !display ) {
      ( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
          done( -1, e );
    s.dataTypes[ 0 ] = "json";
      value = props[ index ] = value[ 0 ];
  fadeToggle: { opacity: "toggle" }

    if ( isArray ) {
          if ( elem && elem.parentNode ) {
    docElem.oMatchesSelector ||
            if ( simple ) {
            } else {
  div.innerHTML = "<input/>";
  support.optSelected = opt.selected;
          attrs = elem.attributes;
    return this.each(function( i ) {
  "useMap",
    }
      jQuery.event.add( this, "beforeactivate._change", function( e ) {

    // checkbox/radio button to an empty string instead of "on"
  elem = el || elem;
      // Use the already-created iframe if possible
    }
        // Simply rethrow otherwise

    }
}, function( name, props ) {
        // Prevent never-ending loop
      for ( ; i < length; i++ ) {
            // Handle the case where IE, Opera, and Webkit return items
    docElem.msMatchesSelector) )) ) {
              while ( dir ) {
              cache = outerCache[ dir ] = [ dirkey ];
  div.firstChild.setAttribute( "value", "" );

          for ( ; i < attrs.length; i++ ) {
      var val;
  "frameBorder",

        var elem = e.target;
    qualifier = jQuery.filter( qualifier, elements );
    if ( dest.value !== src.value ) {
  return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
      iframe = ( iframe ||
  }
        } else {
    // Install callback

  jQuery.fn[ name ] = function( speed, easing, callback ) {
        if ( target === copy ) {
        value = callback( elems[ i ], i, arg );
            // by name instead of ID

                node = elem;
              cache[1] = matcher( elem, context, xml ) || cachedruns;
  return div.firstChild.getAttribute( "value" ) === "";
  // Tests for enctype support on a form (#6743)
            name = attrs[i].name;

  "contentEditable"
    return event.result;

  }
      dest.value = src.value;
}
        jQuery("<iframe frameborder='0' width='0' height='0'/>")
  if ( deep ) {
          throw e;
    overwritten = window[ callbackName ];
    if ( index !== name ) {
    return this.animate( props, speed, easing, callback );
          continue;

            if ( elem.id === m ) {
    assert(function( div ) {
                while ( (node = node[ dir ]) ) {
              if ( cache[1] === true ) {
}) ) {
  support.enctype = !!document.createElement("form").enctype;

      if ( this.nodeType !== 1 ) {
], function() {
  },
        if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {

    }

        .css( "cssText", "display:block !important" )
    jQuery.extend( true, target, deep );
        }
    window[ callbackName ] = function() {
      props[ name ] = value;
  };
        }
        if ( value != null ) {
              results.push( elem );
      // Check to see if it's possible to do matchesSelector
                  if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
                return true;
  addHandle( "value", function( elem, name, isXML ) {

            if ( name.indexOf("data-") === 0 ) {
        return;
  jQuery.propFix[ this.toLowerCase() ] = this;

          jQuery.event.add( elem, "change._change", function( event ) {
  return jQuery.grep( elements, function( elem ) {

function showHide( elements, show ) {
      ).appendTo( doc.documentElement );
  }
      }
      responseContainer = arguments;
      delete props[ index ];
});

          ret[ ret.length ] = value;
              return results;
      // on a disconnected node (IE 9)
                    return false;
              }
    if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
  // Makes sure cloning an html5 element does not cause problems
              name = jQuery.camelCase( name.slice(5) );
      }
});
  handlers: function( event, handlers ) {
            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
    return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
  // IE6-8 fails to return the selected option to the default selected
  var display, elem, hidden,


    }
    };
    }

        // Recurse if we're merging plain objects or arrays
        }
            }
      support.disconnectedMatch = matches.call( div, "div" );
                  }
            }
      return elem.defaultValue;
  // Where outerHTML is undefined, this still works



    var sel, handleObj, matches, i,
              jQuery.event.simulate( "change", this.parentNode, event, true );
  });
  // state when cloning options
    values = [],
      // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
  return target;



jQuery.speed = function( speed, easing, fn ) {
        if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
      }
          } else {

                }
          }
    }
  support.html5Clone = document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>";
              dataAttr( elem, name, data[ name ] );
      if ( isFunction ) {
// IE6/7 call enctype encoding
      handlerQueue = [],
            }
}
  } else if ( nodeName === "option" ) {
    index = 0,
      doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
}
    // Callback for when everything is done
    // Clean-up function (fires after converters)
    hooks = jQuery.cssHooks[ name ];
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
          if ( copyIsArray ) {

            return results;
      // This should fail with an exception
                // Reverse direction for :only-* (if we haven't yet done so)
        }
  });

            }
        val = value.call( this, i, jQuery( this ).val() );
if ( !jQuery.support.enctype ) {
      delegateCount = handlers.delegateCount,
          });
function createSafeFragment( document ) {
    dest.defaultSelected = dest.selected = src.defaultSelected;
    length = elements.length;
      doc.write("<!doctype html><html><body>");

    function done( status, nativeStatusText, responses, headers ) {
    jqXHR.always(function() {
    if ( hooks && "expand" in hooks ) {
    complete: fn || !fn && easing ||
            copyIsArray = false;
    // Go through every key on the object,
          }
      // Gecko does not error, returns false instead
                start = dir = type === "only" && !start && "nextSibling";
      }
}
  // Will be defined later
          }
      } else {
  jQuery.propFix.enctype = "encoding";
      cur = event.target;
          jQuery._data( elem, "changeBubbles", true );
  var list = nodeNames.split( "|" ),


      doc.close();
jQuery.fn.load = function( url, params, callback ) {
      var isSuccess, success, error, response, modified,
      // Restore preexisting value
      value = hooks.expand( value );
      jQuery.isFunction( speed ) && speed,
            clone = src && jQuery.isArray(src) ? src : [];
    } else {
        } else {
      matches.call( div, "[s!='']:x" );
              }
    };

  support.inlineBlockNeedsLayout = false;
          jQuery._data( elem, "parsedAttrs", true );
        val = value;
}

        }
    safeFrag = document.createDocumentFragment();
  // IE6-8 fails to set the defaultValue to the correct value when
  for ( ; index < length; index++ ) {

  if ( typeof url !== "string" && _load ) {
        statusText = nativeStatusText;
      window[ callbackName ] = overwritten;
      delete props[ name ];
    duration: speed,

      for ( i in elems ) {
          // Context is not a document
      rbuggyMatches.push( "!=", pseudos );
              return true;
}
// Support: IE<9
  support.shrinkWrapBlocks = false;
        }
      }

    // Find delegate handlers
      });

  // cloning other types of input fields
    elem = elements[ index ];
      display = actualDisplay( nodeName, doc );
    return _load.apply( this, arguments );



    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
          } else {
        value = callback( elems[ i ], i, arg );
          if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
    });
            }

// Use getAttributeNode to fetch booleans when getAttribute lies
  support.pixelPosition = false;
      }

// Radios and checkboxes getter/setter
    // Black-hole SVG <use> instance trees (#13180)
    },
  if ( safeFrag.createElement ) {
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    if ( !elem.style ) {
      iframe.detach();
  }
      // Called once
      // Save back as free
      // not quite $.extend, this wont overwrite keys already present.
  };
            clone = src && jQuery.isPlainObject(src) ? src : {};

            contains( context, elem ) && elem.id === m ) {
  }

function elementMatcher( matchers ) {
if ( !assert(function( div ) {
  support.deleteExpando = true;

      // Treat null/undefined as ""; convert numbers to string
jQuery.each([ "radio", "checkbox" ], function() {
    // Avoid non-left-click bubbling in Firefox (#3861)

    while ( list.length ) {
    dest.defaultValue = src.defaultValue;
      continue;
    }

      if ( state === 2 ) {
      if ( s[ callbackName ] ) {
      // also - reusing 'index' from above because we have the correct "name"

          }
        if ( value != null ) {
            results.push( elem );

            start = [ forward ? parent.firstChild : parent.lastChild ];
  return matchers.length > 1 ?
  return div.getAttribute("disabled") == null;
  support.noCloneEvent = true;
      return data;
      if ( val == null ) {
  jQuery.valHooks[ this ] = {
    if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
    handle: function( event ) {
      safeFrag.createElement(
  }
    }

  var selector, response, type,
        return;
        // make sure that re-using the options doesn't screw things around
      for ( index in value ) {
  opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :

          ret[ ret.length ] = value;
            return results;
  rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );

    function( elem, context, xml ) {
}) ) {
  support.reliableMarginRight = true;
    }
        val = "";
    set: function( elem, value ) {

      var elem = event.target;
        list.pop()
}

    // Store the correct default display
    self = this,
      }
        s.jsonpCallback = originalSettings.jsonpCallback;
        if ( !( index in props ) ) {
    opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
          // Never move original objects, clone them
        }
          }
  rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
            // non-xml :nth-child(...) stores cache data on `parent`
      var i = matchers.length;
  addHandle( booleans, function( elem, name, isXML ) {
  support.boxSizingReliable = true;

      } else if ( typeof val === "number" ) {
      if ( jQuery.isArray( value ) ) {
      /* jshint eqeqeq: false */

      );

    values[ index ] = jQuery._data( elem, "olddisplay" );
    elemdisplay[ nodeName ] = display;
    off = url.indexOf(" ");


          props[ index ] = value[ index ];

          target[ name ] = jQuery.extend( deep, clone, copy );
      }
        }

            if ( forward && useCache ) {
      while ( i-- ) {
    var val;

    // Sets multiple values
        val += "";
        return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
      for ( ; cur != this; cur = cur.parentNode || this ) {
      // Swallow native change events from checkbox/radio, we already triggered them above
    }
jQuery.each({
    display = elem.style.display;
  }

      // State is "done" now
        // save the callback name for future use
          specialEasing[ index ] = easing;
  // normalize opt.queue - true/undefined/null -> "fx"

    }

  /* Contains
              // Seek `elem` from a previously-cached index
        if ( !matchers[i]( elem, context, xml ) ) {
    if ( !isXML ) {
  // Make sure checked status is properly cloned
    if ( typeof key === "object" ) {
      } else if ( jQuery.isArray( val ) ) {
      }
        /* jshint eqeqeq: true */
      if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
  }
  appendTo: "append",
    if ( show ) {

  if ( off >= 0 ) {
      state = 2;
        oldCallbacks.push( callbackName );
        }
  if ( opt.queue == null || opt.queue === true ) {
        // Don't bring in undefined values

      // Speed-up: Sizzle("TAG")
  ---------------------------------------------------------------------- */
              outerCache = parent[ expando ] || (parent[ expando ] = {});
          return false;
      return (val = elem.getAttributeNode( name )) && val.specified ?
  input.checked = true;
      return this.each(function() {
        val = jQuery.map(val, function ( value ) {
    }

        return event.handleObj.handler.apply( this, arguments );
  return safeFrag;
  prependTo: "prepend",
      // Reset the inline display of this element to learn if it is
  return display;
    selector = url.slice( off, url.length );

      }
      }
    opt.queue = "fx";
        } else if ( copy !== undefined ) {
    // Flatten any nested arrays
      } else if ( match[2] ) {

              cache = outerCache[ type ] || [];
        }
        val.value :
  support.noCloneChecked = input.cloneNode( true ).checked;
        jQuery.data( this, key );
          return value == null ? "" : value + "";
  };
        // Don't check non-elements (#13208)
      }
}
  insertBefore: "before",
      // being hidden by cascaded rules or not
}
    url = url.slice( 0, off );
      // Clear timeout if it exists

    } else {
  }
          target[ name ] = copy;
    return core_concat.apply( [], ret );
        push.apply( results, context.getElementsByTagName( selector ) );
  // Element contains another
              nodeIndex = cache[0] === dirruns && cache[1];
      }
        elem[ name ] === true ? name.toLowerCase() : null;

      });
        });
  if ( !jQuery.support.checkOn ) {
        // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
    },

  insertAfter: "after",
      if ( !values[ index ] && display === "none" ) {

  }
      if ( timeoutTimer ) {
      // Call if it was a function and we have a response
      specialEasing[ name ] = easing;

        }
  },
        return results;
  // Purposefully does not implement inclusive descendent
              diff = cache[0] === dirruns && cache[2];
      return true;
    }
  // Make sure that the options inside disabled selects aren't marked as disabled
    }
      }
    jQuery.valHooks[ this ].get = function( elem ) {
        if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
  replaceAll: "replaceWith"
        elem.style.display = "";
// Called ONLY from within css_defaultDisplay

        clearTimeout( timeoutTimer );
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
    }
  // Queueing
      }


  // As in, an element does not contain itself
              node = nodeIndex && parent.childNodes[ nodeIndex ];
    } :
  });
  // (WebKit marks them as disabled)


      // Support: Webkit
          matches = [];
    teardown: function() {
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
}, function( name, original ) {
      }
function actualDisplay( name, doc ) {
  // If it's a function
      }
        overwritten( responseContainer[ 0 ] );
  }
  opt.old = opt.complete;
    }
  // A global GUID counter for objects
      // Speed-up: Sizzle(".CLASS")
  contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?

    matchers[0];
}
  select.disabled = true;
    return arguments.length > 1 ?
      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
      // "" is returned instead of "on" if a value isn't specified
          for ( i = 0; i < delegateCount; i++ ) {
      jQuery.event.remove( this, "._change" );
  rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
  jQuery.fn[ name ] = function( selector ) {

  var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
  if ( jQuery.isFunction( params ) ) {

      }
}

  }
  guid: 1,
      } else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
    function( a, b ) {
              while ( (node = ++nodeIndex && node && node[ dir ] ||
}

  support.optDisabled = !opt.disabled;


      return elem.getAttribute("value") === null ? "on" : elem.value;
            handleObj = handlers[ i ];

  rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
    var elems,
      // Set elements which have been overridden with display: none
    display = jQuery.css( elem[0], "display" );

      // Dereference transport for early garbage collection


  opt.complete = function() {


        push.apply( results, context.getElementsByClassName( m ) );
      var adown = a.nodeType === 9 ? a.documentElement : a,


jQuery.find = Sizzle;

      // Sets one value
      // If set returns undefined, fall back to normal setting
    };

      return !rformElems.test( this.nodeName );
  rleadingWhitespace = /^\s+/,
      i = 0,
      // in a stylesheet to whatever the default browser style is
  elem.remove();
    // We assume that it's the callback
      // (no matter how long the jqXHR object will be used)
      responseContainer = overwritten = undefined;
jQuery.Animation = jQuery.extend( Animation, {
    if ( jQuery.isFunction( opt.old ) ) {
  // Return the modified object
  // Bind a function to a context, optionally partially applying any
        return results;
        bup = b && b.parentNode;
                // Fallback to seeking `elem` from the start
function condense( unmatched, map, filter, context, xml ) {
jQuery.expr = Sizzle.selectors;
  // Support: IE<9
      this.each(function() {
      if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
  }
            // Don't conflict with Object.prototype properties (#13203)
    }
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ret = [],
      // for such an element
  return display;
    callback = params;
      transport = undefined;
    });

      opt.old.call( this );
  return target;
  // arguments.
      }
      return a === bup || !!( bup && bup.nodeType === 1 && (
                (diff = nodeIndex = 0) || start.pop()) ) {
  var elem,
jQuery.expr[":"] = jQuery.expr.pseudos;
  try {
        jQuery.data( this, key, value );
        this.value = val;
});
            sel = handleObj.selector + " ";
  };
  rtagName = /<([\w:]+)/,
      insert = jQuery( selector ),
      if ( elem.style.display === "" && isHidden( elem ) ) {
}
    params = undefined;


  tweener: function( props, callback ) {
    }
};
  proxy: function( fn, context ) {
    }
        adown.contains ?

    newUnmatched = [],
jQuery.unique = Sizzle.uniqueSort;
    delete div.test;
      }) :
      }
var rformElems = /^(?:input|select|textarea)$/i,

}
  rtbody = /<tbody/i,
      last = insert.length - 1;
        values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );


      // Cache response headers
    // Delegate to script
    if ( jQuery.isFunction( props ) ) {


    var args, proxy, tmp;

          adown.contains( bup ) :
                // When found, cache indexes on `parent` and break
    i = 0,
jQuery.text = Sizzle.getText;
  } catch( e ) {

    });
  rkeyEvent = /^key/,
            if ( matches[ sel ] === undefined ) {

  rhtml = /<|&#?\w+;/,

      }
jQuery.each([ "height", "width" ], function( i, name ) {
  // Otherwise, build a param string
      responseHeadersString = headers || "";
    return "script";
      callback = props;
    if ( opt.queue ) {
jQuery.extend({

    // QSA path
          a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
                if ( node.nodeType === 1 && ++diff && node === elem ) {
    len = unmatched.length,
jQuery.isXMLDoc = Sizzle.isXML;
    support.deleteExpando = false;
      // Gets one value
  }
  rmouseEvent = /^(?:mouse|contextmenu)|click/,
              matches[ sel ] = handleObj.needsContext ?
// Create "bubbling" focus and blur events
  rnoInnerhtml = /<(?:script|style|link)/i,
    for ( ; i <= last; i++ ) {
    } else {
  jQuery.cssHooks[ name ] = {
  } else if ( params && typeof params === "object" ) {

  }
      props = [ "*" ];
      jQuery.dequeue( this, opt.queue );
  // Unique for each copy of jQuery on the page
    if ( typeof context === "string" ) {
    if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
      ));
                  outerCache[ type ] = [ dirruns, nodeIndex, diff ];
    mapped = map != null;
jQuery.contains = Sizzle.contains;
  }
      // Try to fetch any internally stored data first
});
  rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
                jQuery( sel, this ).index( cur ) >= 0 :
if ( !jQuery.support.focusinBubbles ) {
  manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
      elems = i === last ? this : this.clone(true);

    get: function( elem, computed, extra ) {
    type = "POST";
      // Set readyState
});
    } else {
    }
  // Non-digits removed to match rinlinejQuery
      tmp = fn[ context ];
      nid = old = expando;
    } :
                  break;



      elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;

  rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
                jQuery.find( sel, this, null, [ cur ] ).length;
  jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
  // checked="checked" or checked
      jQuery( insert[i] )[ original ]( elems );
      if ( !values[ index ] ) {
      if ( computed ) {
  }
      jqXHR.readyState = status > 0 ? 4 : 0;
var xhrCallbacks, xhrSupported,
      props = props.split(" ");
  };
  expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),
      context = fn;
      newContext = context;
    function( a, b ) {
                }
  for ( ; i < len; i++ ) {

  // Check if we can trust getAttribute("value")
  },
jQuery.extend({

            }

  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

        hidden = isHidden( elem );
        // certain elements can have dimension info if we invisibly show them


  xhrId = 0,
    }


      fn = tmp;
      newSelector = nodeType === 9 && selector;
      if ( b ) {
              }
    if ( (elem = unmatched[i]) ) {
})( window );
  input = document.createElement("input");

  valHooks: {
function returnTrue() {
            if ( matches[ sel ] ) {
    // Attach a single capturing handler while someone wants focusin/focusout
  rscriptType = /^$|\/(?:java|ecma)script/i,
      // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()

        // however, it must have a current display style that would benefit from this
  // If we have elements to modify, make the request
      // Determine if successful
  // #5280: Internet Explorer will keep connections alive if we don't abort on unload

  return opt;
  noConflict: function( deep ) {
    }

        while ( (b = b.parentNode) ) {

      if ( !filter || filter( elem, context, xml ) ) {
// String to Object options format cache
  input.setAttribute( "value", "" );
  removeData: function( key ) {
    option: {
  return true;
              matches.push( handleObj );
    var attaches = 0,
  rscriptTypeMasked = /^true\/(.*)/,
      core_push.apply( ret, elems.get() );
        if ( display && display !== "none" || !hidden ) {
        return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
  if ( self.length > 0 ) {
      isSuccess = status >= 200 && status < 300 || status === 304;
  xhrOnUnloadAbort = window.ActiveXObject && function() {
    var prop,
};
    if ( window.$ === jQuery ) {

      // qSA works strangely on Element-rooted queries
          if ( b === a ) {
            // Use previously-cached element index if available
        newUnmatched.push( elem );
var optionsCache = {};
  support.input = input.getAttribute( "value" ) === "";
    return this.each(function() {
      get: function( elem ) {
}
            }
      handler = function( event ) {
  rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    }
          jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
          jQuery.swap( elem, cssShow, function() {
    jQuery.ajax({

    // Abort all pending requests
      index = 0,

      window.$ = _$;
    // Quick check to determine if target is callable, in the spec
      // We can work around this by specifying an extra ID on the root
            return true;
            } else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
        if ( mapped ) {


      jQuery.removeData( this, key );
        // Use proper attribute retrieval(#6932, #12072)

          }
        jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );


        }
            return getWidthOrHeight( elem, name, extra );
      url: url,
      // Get response data
    var key;
      length = props.length;
jQuery.easing = {
    }
    // this throws a TypeError, but we will just return undefined.
      // and working up from there (Thanks to Andrew Dupont for the technique)
          }
              diff = cache[1];
          map.push( i );
// Convert String-formatted options into Object-formatted ones and store in cache
  // Check if an input maintains its value after becoming a radio
    });
        var val = jQuery.find.attr( elem, "value" );
function returnFalse() {
          if ( matches.length ) {
      };
  // We have to close these tags to support XHTML (#13200)
    return this.pushStack( ret );
      }
          }) :

      if ( responses ) {
    for ( key in xhrCallbacks ) {

  linear: function( p ) {

    if ( !jQuery.isFunction( fn ) ) {
      // IE 8 doesn't work on object elements
        }

        }
function createOptions( options ) {
  input.value = "t";
  }
        return val != null ?
  return false;
            handlerQueue.push({ elem: cur, handlers: matches });

  wrapMap = {
  };
    }
          getWidthOrHeight( elem, name, extra );
      // if "type" variable is undefined, then "GET" method will be used
        response = ajaxHandleResponses( s, jqXHR, responses );
      xhrCallbacks[ key ]( undefined, true );
    for ( ; index < length ; index++ ) {
    return p;
    if ( deep && window.jQuery === jQuery ) {
      return undefined;
      if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
      }
            // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
      }
  var object = optionsCache[ options ] = {};
  input.setAttribute( "type", "radio" );
});
          val :
}
          }
    jQuery.event.special[ fix ] = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
});
  }
      }
      type: type,
      }
    }
      prop = props[ index ];
  },
      window.jQuery = _jQuery;
    }
        groups = tokenize( selector );
      return false;
            } else {
    }
  jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
  support.radioValue = input.value === "t";

          elem.text;

        }
      setup: function() {
    legend: [ 1, "<fieldset>", "</fieldset>" ],


    },
      dataType: "html",

  };
      tweeners[ prop ] = tweeners[ prop ] || [];
  swing: function( p ) {
    }


    };
              // Use the same loop as above to seek `elem` from the start
  }
    object[ flag ] = true;

function dataAttr( elem, key, data ) {
      }
function safeActiveElement() {
      }
        if ( attaches++ === 0 ) {
    area: [ 1, "<map>", "</map>" ],
function getAll( context, tag ) {
  // Set the display of most of the elements in a second loop

      data: params
      // Convert no matter what (that way responseXXX fields are always set)

      tweeners[ prop ].unshift( callback );
    return 0.5 - Math.cos( p*Math.PI ) / 2;

    // Simulated bind
        if ( (old = context.getAttribute("id")) ) {

              while ( (node = ++nodeIndex && node && node[ dir ] ||

  });
  // #11217 - WebKit loses check when the name is after the checked attribute
  // If nothing was found internally, try to fetch any
    },
  try {
    }
          document.addEventListener( orig, handler, true );
    param: [ 1, "<object>", "</object>" ],
  var elems, elem,
  // to avoid the constant reflow
    set: function( elem, value, extra ) {
    }).done(function( responseText ) {
      response = ajaxConvert( s, response, jqXHR, isSuccess );
// Functions to create xhrs
    }
  }
    return jQuery;
    args = core_slice.call( arguments, 2 );
          nid = old.replace( rescape, "\\$&" );
  /* Sorting
                (diff = nodeIndex = 0) || start.pop()) ) {
  return newUnmatched;
  return object;
  input.setAttribute( "checked", "t" );
  // data from the HTML5 data-* attribute
    select: {
    return document.activeElement;

        }
    thead: [ 1, "<table>", "</table>" ],
    i = 0,
  for ( index = 0; index < length; index++ ) {
      var styles = extra && getStyles( elem );


function createStandardXHR() {
  },
};
  },
    proxy = function() {
        } else {
  ---------------------------------------------------------------------- */

}
}
  input.setAttribute( "name", "t" );
  if ( data === undefined && elem.nodeType === 1 ) {
      get: function( elem ) {
  } catch ( err ) { }
    // Add the remaining (directly-bound) handlers
      },
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
    elem = elements[ index ];
      return setPositiveNumber( elem, value, extra ?
      // Save response for use in complete callback
      // If successful, handle type chaining
  try {



      return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
          context.setAttribute( "id", nid );

                if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {




        var value, option,
}
    if ( delegateCount < handlers.length ) {
      teardown: function() {
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
      typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
    if ( !elem.style ) {
        augmentWidthOrHeight(
      response = arguments;
      if ( isSuccess ) {
    return new window.XMLHttpRequest();
  prefilter: function( callback, prepend ) {
jQuery.timers = [];
  // Is the DOM ready to be used? Set to true once it occurs.
    };
        }
  // Document order sorting
                  // Cache the index of each encountered element
function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
/*
  fragment = document.createDocumentFragment();
    var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
          options = elem.options,

      handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
        if ( --attaches === 0 ) {
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
      undefined;
      continue;
          elem,


  } catch( e ) {}
    if ( prepend ) {
jQuery.fx = Tween.prototype.init;
  isReady: false,

        nid = "[id='" + nid + "'] ";
  sortOrder = docElem.compareDocumentPosition ?
                  if ( useCache ) {
  if ( postFilter && !postFilter[ expando ] ) {
 * Create a callback list using the following parameters:
  fragment.appendChild( input );

          index = elem.selectedIndex,
/*
    }
          document.removeEventListener( orig, handler, true );


    }
          name,
      self.html( selector ?
        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
}
      animationPrefilters.unshift( callback );
jQuery.fx.tick = function() {

    // Set the guid of unique handler to the same of original handler, so it can be removed

  function( a, b ) {
                    (node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
    postFilter = setMatcher( postFilter );
 *

    data = elem.getAttribute( name );
          one = elem.type === "select-one" || index < 0,
 * Helper functions for managing events -- not part of the public interface.

        }
    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
  if ( !found ) {
    if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
          extra,

        if ( s.ifModified ) {

    } else {
  var timer,
  // A counter to track how many items to wait for before
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        i = groups.length;

                  }
  }
 *  options: an optional list of space-separated options that will change how
  // Check if a disconnected checkbox will retain its checked

          values = one ? null : [],
 * Props to Dean Edwards' addEvent library for many of the ideas.
    return handlerQueue;
      }
    // unless wrapped in a div with non-breaking characters in front of it.
    for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
      elem.style.display = show ? values[ index ] || "" : "none";
          jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
        // If a selector was specified, locate the right elements in a dummy div
          modified = jqXHR.getResponseHeader("Last-Modified");
function createActiveXHR() {
      animationPrefilters.push( callback );
    timers = jQuery.timers,
  // the ready event fires. See #6781

        while ( i-- ) {
    // Flag for duplicate removal

  if ( postFinder && !postFinder[ expando ] ) {
 *      the callback list behaves or a more traditional option object
  // value of true after appended to the DOM (IE6/7)
    if ( typeof data === "string" ) {
          max = one ? index + 1 : options.length,
 */
  },
    };
    _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
      if ( !tag || jQuery.nodeName( elem, tag ) ) {
    }
          styles
        // Exclude scripts to avoid IE 'Permission Denied' errors
          if ( modified ) {
  try {
    }
    i = 0;
  readyWait: 1,
    return proxy;
          groups[i] = nid + toSelector( groups[i] );
    if ( a === b ) {
                  if ( node === elem ) {
    postFinder = setMatcher( postFinder, postSelector );
 *
  support.appendChecked = input.checked;
      try {
          i = index < 0 ?
jQuery.event = {

  });
  },
        found.push( elem );
  }
        ) : 0
        jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
            jQuery.lastModified[ cacheURL ] = modified;
    return new window.ActiveXObject("Microsoft.XMLHTTP");
  }


  },
        }
      hasDuplicate = true;
                    break;
  }
 * By default a callback list will act like an event callback list and can be

        data = data === "true" ? true :
            max :

  fix: function( event ) {
}
  safeFragment = createSafeFragment( document ),
      } else {

      );

          }
  } catch( e ) {}
});
  fxNow = jQuery.now();
  // Hold (or release) the ready event

        newContext = rsibling.test( selector ) && context.parentNode || context;
      return 0;
                  }
  return markFunction(function( seed, results, context, xml ) {
 * "fired" multiple times.
  // WebKit doesn't clone checked state correctly in fragments
          data === "false" ? false :
            one ? index : 0;
  global: {},
    if ( event[ jQuery.expando ] ) {

  fragmentDiv = safeFragment.appendChild( document.createElement("div") );
        jQuery.merge( found, getAll( elem, tag ) );
  return elements;
    }
        // Otherwise use the full result
          modified = jqXHR.getResponseHeader("etag");
}


  holdReady: function( hold ) {
  // Multifunctional method to get and set values of a collection
        newSelector = groups.join(",");
    }
                }
    var temp, i, elem,
 *
  support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;
          data === "null" ? null :


      return event;
jQuery.fn.extend({

      }
}
  };
        responseText );
          if ( modified ) {

function defaultPrefilter( elem, props, opts ) {
  for ( ; i < timers.length; i++ ) {
    if ( hold ) {
  // The value/s can optionally be executed if it's a function
      }

              }
      preMap = [],
 * Possible options:

          // Only convert to a number if it doesn't change the string
        // Loop through all the selected options
  add: function( elem, types, handler, data, selector ) {
    }

wrapMap.optgroup = wrapMap.option;
    }

});

            jQuery.etag[ cacheURL ] = modified;
// Create the request object
  /* jshint validthis: true */
    timer = timers[ i ];
      jQuery.readyWait++;
  access: function( elems, fn, key, value, chainable, emptyGet, raw ) {

    var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );
            }
      postMap = [],
 *
  // Support: IE<9
          +data + "" === data ? +data :
        for ( ; i < max; i++ ) {
    var tmp, events, t, handleObjIn,

  on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  }
jQuery.fn.extend({

    }).complete( callback && function( jqXHR, status ) {
          }
// (This is still attached to ajaxSettings for backward compatibility)
  var prop, value, toggle, tween, hooks, oldfire,
    // Checks the timer has not already been removed
    } else {
    var i = 0,
      if ( newSelector ) {


      preexisting = results.length,
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
  // Opera does not clone events (and typeof div.attachEvent === undefined).
          rbrace.test( data ) ? jQuery.parseJSON( data ) :
          option = options[ i ];
      special, eventHandle, handleObj,
    // Create a writable copy of the event object and normalize some properties
    var type, origFn;
wrapMap.th = wrapMap.td;

  css: function( name, value ) {
if ( !jQuery.support.opacity ) {
      self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
        }
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
    anim = this,
    if ( !timer() && timers[ i ] === timer ) {
      jQuery.ready( true );
      length = elems.length,
        try {
    if ( compare ) {
            // Incorporate the offset, then check against cycle size

 *
  // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
            data;

      handlers, type, namespaces, origType,
    var i, prop, copy,


  return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
    return jQuery.access( this, function( elem, name, value ) {
  jQuery.cssHooks.opacity = {
    });

  /* Microsoft failed to properly
    orig = {},
      timers.splice( i--, 1 );
    }
      bulk = key == null;
          push.apply( results,
      // Disconnected nodes
            diff -= last;
      // Get initial elements from seed or context
 *  memory:     will keep track of previous values and will call any callback added
  if ( div.attachEvent ) {
      } catch( e ) {}
          // oldIE doesn't update selected after form reset (#2551)
      elemData = jQuery._data( elem );
      type = event.type,
    // Types can be a map of types/handlers
jQuery.fn.extend({
    jQuery.merge( [ context ], found ) :
      var len, styles,
    get: function( elem, computed ) {
  }
        // if no content
   * implement the XMLHttpRequest in IE7 (can't request local files),
    style = elem.style,
    }
  },

            newContext.querySelectorAll( newSelector )
      if ( compare & 1 ||
            return diff === first || ( diff % first === 0 && diff / first >= 0 );
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
 *          after the list has been fired right away with the latest "memorized"
    div.attachEvent( "onclick", function() {

          if ( ( option.selected || i === index ) &&

      originalEvent = event,
    if ( typeof types === "object" ) {
  text: function( value ) {
    found;
        map = {},
      // IE uses filters for opacity

        if ( status === 204 || s.type === "HEAD" ) {
   * so we use the ActiveXObject when it is available
    hidden = elem.nodeType && isHidden( elem ),
  }

    // Sets many values
          );
        (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
          }

 *          values (like a Deferred)
      support.noCloneEvent = false;
      // Make sure we set the data so it isn't changed later
              // Don't return options that are disabled or in a disabled optgroup
    // Don't attach events to noData or text/comment nodes (but allow plain objects)
      fixHook = this.fixHooks[ type ];
      // ( types-Object, selector, data )
    return jQuery.access( this, function( value ) {
}
        i = 0;
      return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
  return this;
          statusText = "nocontent";
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
    dataShow = jQuery._data( elem, "fxshow" );

  // Handle when the DOM is ready
    if ( jQuery.type( key ) === "object" ) {
          return results;

        };
      // Prefilter to get matcher input, preserving a map for seed-results synchronization
 *
    });
      jQuery.data( elem, key, data );
              ( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
    if ( !elemData ) {

      if ( typeof selector !== "string" ) {
      return value === undefined ?


        ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
};

   * we need a fallback.

  if ( !timers.length ) {
  ready: function( wait ) {
      chainable = true;
        } catch(qsaError) {
        // Choose the first element that is related to our preferred document
    },
      matcherIn = preFilter && ( seed || !selector ) ?
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)


              ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
      return;
    if ( !fixHook ) {
        // ( types-Object, data )
        jQuery.text( this ) :
// Used in buildFragment, fixes the defaultChecked property
      if ( jQuery.isArray( name ) ) {
        computed ? "1" : "";

        // if not modified
   */
  // handle queue: false promises
    jQuery.fx.stop();

      for ( i in key ) {
        } finally {
        if ( a === doc || contains(preferredDoc, a) ) {

        condense( elems, preMap, preFilter, context, xml ) :
 *
    div.cloneNode( true ).click();
    } else {

    }
      this.fixHooks[ type ] = fixHook =
        data = data || selector;
        this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
function fixDefaultChecked( elem ) {
        styles = getStyles( elem );
    },
// Attach a bunch of functions for handling common AJAX events
        } else if ( status === 304 ) {
  function() {
  if ( !opts.queue ) {
  }
    // Abort if there are pending holds or we're already ready
        jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
          if ( !old ) {
          return -1;
    "PSEUDO": function( pseudo, argument ) {
        elems,
 *  stopOnFalse:  interrupt callings when a callback returns false
  }
      data = undefined;
            // Get the specific value for the option

        rmouseEvent.test( type ) ? this.mouseHooks :
        selector = undefined;
    }, null, value, arguments.length );
  if ( manipulation_rcheckableType.test( elem.type ) ) {
        len = name.length;

jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
          statusText = "notmodified";
    return !this.isLocal && createStandardXHR() || createActiveXHR();
    hooks = jQuery._queueHooks( elem, "fx" );
  fxNow = undefined;
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      }
            context.removeAttribute("id");
        }
      // pseudo-class names are case-insensitive

 *

    }
            value = jQuery( option ).val();
    // Caller can pass in an object of custom data in lieu of the handler
        rkeyEvent.test( type ) ? this.keyHooks :
      }
  },
    elem.defaultChecked = elem.checked;

    set: function( elem, value ) {
  jQuery.fn[ type ] = function( fn ){

  } :
    if ( hooks.unqueued == null ) {
};
      return;

          }
        if ( b === doc || contains(preferredDoc, b) ) {
      // http://www.w3.org/TR/selectors/#pseudo-classes
      matcherOut = matcher ?
 */
  // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
  }

    if ( handler.handler ) {
        {};
      for ( type in types ) {

  }
        for ( ; i < len; i++ ) {
      var style = elem.style,
    return this.on( type, fn );
        // If we have data, let's convert it
  // For all other browsers, use the standard XMLHttpRequest object
      hooks.unqueued = 0;

    }
    // Sets one value
        }
          return 1;
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
jQuery.Callbacks = function( options ) {
  // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)

            // We don't need an array for one selects
      handleObjIn = handler;
    }
        this.on( type, selector, data, types[ type ], one );
  append: function() {
}
          map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
        currentStyle = elem.currentStyle,
  };
        } else {
  createStandardXHR;
      oldfire = hooks.empty.fire;
jQuery.fx.timer = function( timer ) {

    } else if ( value !== undefined ) {
      }
        }
      // Remember that setFilters inherits from pseudos
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

  for ( i in { submit: true, change: true, focusin: true }) {
  return data;
            if ( one ) {
      handler = handleObjIn.handler;
    copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
      }
    return this.domManip( arguments, function( elem ) {

        }
        opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
});
          statusText = response.state;

      hooks.empty.fire = function() {
  if ( timer() && jQuery.timers.push( timer ) ) {
    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
      chainable = true;
    }

      var args,

  // Convert options from String-formatted to Object-formatted if needed
    div.setAttribute( eventName = "on" + i, "t" );
}
              return value;
      selector = handleObjIn.selector;

      return this;
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
jQuery.extend({

        filter = currentStyle && currentStyle.filter || style.filter || "";

          success = response.data;
// Determine support properties
        if ( !hooks.unqueued ) {
    jQuery.fx.start();
    if ( !document.body ) {

  }
        // Maintain original order
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          // ...intermediate processing is necessary
  // (we check in cache first)


            }
    }
    event = new jQuery.Event( originalEvent );
    }
        var target = manipulationTarget( this, elem );
  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
        return map;

jQuery.extend({
          error = response.error;
xhrSupported = jQuery.ajaxSettings.xhr();
          oldfire();
  }
      return setTimeout( jQuery.ready );
      if ( !jQuery.isFunction( value ) ) {

        return sortInput ?
          Sizzle.error( "unsupported pseudo: " + pseudo );
          [] :
  options = typeof options === "string" ?
    support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
// checks a cache object for emptiness




        target.appendChild( elem );
    var destElements, node, clone, i, srcElements,
      }
      // IE has trouble with opacity if it does not have layout

          isSuccess = !error;
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
        }
};
    }
        raw = true;
  // All others
          ( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :


    ( optionsCache[ options ] || createOptions( options ) ) :
  }
function isEmptyDataObject( obj ) {
            // Multi-Selects return an array
    // Make sure that the handler has a unique ID, used to find/remove it later
    i = copy.length;
    if ( data == null && fn == null ) {
      }
      inPage = jQuery.contains( elem.ownerDocument, elem );

      // Force it by setting the zoom level
  // Counter for holding the number of active queries
        }
xhrSupported = jQuery.support.ajax = !!xhrSupported;
      };


      }
  return select( selector.replace( rtrim, "$1" ), context, results, seed );
          0;
      // The user may use createPseudo to indicate that
          // ...otherwise use results directly
    jQuery.extend( {}, options );

  var name;
            values.push( value );
    if ( !handler.guid ) {
    while ( i-- ) {
      // ( types, fn )
    });

      return value !== undefined ?
      style.zoom = 1;
  active: 0,
      } else {

    }
jQuery.fx.interval = 13;
    // Remember that the DOM is ready

}
      }
      // arguments are needed to create the filter function
          results :

  div.style.backgroundClip = "content-box";
  for ( name in obj ) {
          }
      handler.guid = jQuery.guid++;
      prop = copy[ i ];
      fn = selector;
  },
    if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
        jQuery.style( elem, name, value ) :


        // We extract error from statusText
// Create transport if the browser can provide an xhr
    hooks.unqueued++;

    jQuery.isReady = true;
      if ( bulk ) {


      // just as Sizzle does
        matcherIn;
  var // Flag to know if list is currently firing
  div.cloneNode( true ).style.backgroundClip = "";

        }
    }
      event[ prop ] = originalEvent[ prop ];
      data = selector = undefined;

      clone = elem.cloneNode( true );
        jQuery.css( elem, name );
      // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
  // Last-Modified header cache for next request
        // then normalize statusText and status for non-aborts
if ( xhrSupported ) {

jQuery.fx.start = function() {

        // Bulk operations run against the entire set
/**
      return compare & 4 ? -1 : 1;
      if ( fn[ expando ] ) {

    firing,
  support.clearCloneStyle = div.style.backgroundClip === "content-box";
    // if the public data object is empty, the private is still empty


    }
    } else if ( fn == null ) {
  prepend: function() {

    }, name, value, arguments.length > 1 );
      // if value === "", then remove inline opacity #12685
  lastModified: {},
        error = statusText;

    anim.always(function() {
  if ( !timerId ) {
    // If a normal DOM Ready event fired, decrement, and wait if need be
        if ( raw ) {
 * Create key-value caches of limited size
    }
        return fn( argument );
    // Find primary matches
    // Last fire value (for non-forgettable lists)

    if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
        return values;
    // Init the element's event structure and main handler, if this is the first

      if ( typeof selector === "string" ) {
    return this.domManip( arguments, function( elem ) {
    // IE<=8 does not properly clone detached, unknown element nodes
  },
      if ( ( value >= 1 || value === "" ) &&
  etag: {},
        if ( status || !statusText ) {
  jQuery.ajaxTransport(function( s ) {
      // doing this makes sure that the complete handler will be called
    timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
    if ( wait !== true && --jQuery.readyWait > 0 ) {
          fn.call( elems, value );
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with

      }
    if ( matcher ) {
    memory,
  // Support: IE<9
      continue;
      },
    if ( !(events = elemData.events) ) {
    // Support: IE<9
        // ( types, selector, fn )
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
    } else {
  show: function() {
          jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&

          statusText = "error";
    // Cross domain only allowed if supported through XMLHttpRequest
      // before this completes
  }
      return;
          fn = null;
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
    // Not directly comparable, sort on existence of method

      matcher( matcherIn, matcherOut, context, xml );
    // Flag to know if list was already fired
  // Iteration over object's inherited properties before its own.
    }

      events = elemData.events = {};
    // Fix target property (#1925)
        fn = data;
        var target = manipulationTarget( this, elem );
      fragmentDiv.innerHTML = elem.outerHTML;
    return showHide( this, true );
          style.removeAttribute ) {
  ajaxSettings: {
          if ( status < 0 ) {
    if ( !s.crossDomain || jQuery.support.cors ) {
      anim.always(function() {
};
    }

 *  deleting the oldest entry
    return a.compareDocumentPosition ? -1 : 1;
      // But maintain support for old signatures
    }
    fired,
  for ( i in jQuery( support ) ) {
    if ( name !== "toJSON" ) {
      set: function( elem, value ) {
    }
    if ( !event.target ) {
        data = undefined;
        target.insertBefore( elem, target.firstChild );
      fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
  },

    url: ajaxLocation,
            status = 0;

        hooks.unqueued--;

