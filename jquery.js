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
